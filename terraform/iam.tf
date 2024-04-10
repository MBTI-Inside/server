# User, Group
# ------------------------------------------------------------------
resource "aws_iam_user" "mbti_cicd_user" {
  name = "mbti_cicd"
}

resource "aws_iam_access_key" "mbti_cicd_access_key" {
  user = aws_iam_user.mbti_cicd_user.name
}

resource "aws_iam_group" "cicd_group" {
  name = "cicd_group"
}

resource "aws_iam_group_membership" "cicd_group_membership" {
  name = aws_iam_group.cicd_group.name

  users = [aws_iam_user.mbti_cicd_user.name]

  group = aws_iam_group.cicd_group.name
}

# group에서 사용할 assume role policy document
data "aws_iam_policy_document" "cicd_assume_role_policy_document" {
  statement {
    effect    = "Allow"
    actions   = ["sts:AssumeRole"]
    resources = [aws_iam_role.ecr_role.arn, aws_iam_role.ec2_role.arn]

  }
}

# group에서 사용할 assume role policy
resource "aws_iam_policy" "cicd_assume_role_policy" {
  name        = "cicd_assume_role_policy"
  path        = "/"
  description = "Allows to assume role in another AWS account"
  policy      = data.aws_iam_policy_document.cicd_assume_role_policy_document.json
}

# group에 assume role policy 연결
resource "aws_iam_group_policy_attachment" "this" {
  group      = aws_iam_group.cicd_group.name
  policy_arn = aws_iam_policy.cicd_assume_role_policy.arn
}

# ------------------------------------------------------------------
# ECR Role
# ------------------------------------------------------------------

# ecr 권한 설정 document
data "aws_iam_policy_document" "ecr_access_policy_document" {
  statement {
    effect = "Allow"
    actions = ["ecr:BatchCheckLayerAvailability",
      "ecr:CompleteLayerUpload",
      "ecr:InitiateLayerUpload",
      "ecr:PutImage",
    "ecr:UploadLayerPart"]
    resources = [aws_ecr_repository.ecr_repository.arn]
  }

  statement {
    actions = ["ecr:GetAuthorizationToken"]

    resources = ["*"]
  }
}

# ecr 권한 설정
resource "aws_iam_policy" "ecr_access_policy" {
  name        = "ecr_access_policy"
  path        = "/"
  description = "Allows to access ECR"
  policy      = data.aws_iam_policy_document.ecr_access_policy_document.json
}

# ecr에 접근권한이 있는 role 생성 (신뢰관계 포함)
# Trusted relationships (Trusted entitis)
data "aws_iam_policy_document" "ecr_role_policy_document" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity", "sts:TagSession"]
    principals {
      type        = "Service"
      identifiers = ["ecr.amazonaws.com"]
    }

    principals {
      type        = "Federated"
      identifiers = [var.github_actions_identity_provider_arn]
    }
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:MBTI-Inside/server:ref:refs/heads/main"]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }
  }
}



# ecr에 접근권한이 있는 role 생성
# assume role policy는 role의 권한 정책과 별개로 지정
resource "aws_iam_role" "ecr_role" {
  name                  = "ecr_role"
  force_detach_policies = true
  assume_role_policy    = data.aws_iam_policy_document.ecr_role_policy_document.json
}

# ecr role과 ecr 권한 정책 연결
resource "aws_iam_policy_attachment" "ecr_role_attachment" {
  name       = "ecr_role_attachment"
  roles      = [aws_iam_role.ecr_role.name]
  policy_arn = aws_iam_policy.ecr_access_policy.arn
}

# ------------------------------------------------------------------
# ECR
# ------------------------------------------------------------------
# ecr
resource "aws_ecr_repository" "ecr_repository" {
  name                 = "cicd_repository"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
  image_scanning_configuration {
    scan_on_push = true
  }
}

# ------------------------------------------------------------------
# EC2
# ------------------------------------------------------------------



data "aws_iam_policy_document" "ec2_access_role_policy" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com", "ecs.amazonaws.com"]
    }
  }
}


resource "aws_iam_policy_attachment" "ec2_role_attachment" {
  name       = "ec2_role_attachment"
  roles      = [aws_iam_role.ec2_role.name]
  policy_arn = aws_iam_policy.ec2_access_policy.arn
}


data "aws_iam_policy_document" "ec2_access_policy_document" {
  statement {
    effect = "Allow"
    actions = ["ec2:DescribeTags",
      "ecs:CreateCluster",
      "ecs:DeregisterContainerInstance",
      "ecs:DiscoverPollEndpoint",
      "ecs:Poll",
      "ecs:RegisterContainerInstance",
      "ecs:StartTelemetrySession",
      "ecs:UpdateContainerInstancesState",
      "ecs:Submit*",
      "ecr:GetAuthorizationToken",
      "ecr:BatchCheckLayerAvailability",
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchGetImage",
      "logs:CreateLogStream",
    "logs:PutLogEvents"]
    resources = ["*"]
  }

  statement {
    effect    = "Allow"
    actions   = ["ecs:TagResource"]
    resources = ["*"]
    condition {
      test     = "StringEquals"
      variable = "ecs:CreateAction"
      values = ["CreateCluster",
      "RegisterContainerInstance"]
    }
  }


}

resource "aws_iam_policy" "ec2_access_policy" {
  name        = "ec2_access_policy"
  path        = "/"
  description = "Allows to access EC2"
  policy      = data.aws_iam_policy_document.ec2_access_policy_document.json
}

resource "aws_iam_role" "ec2_role" {
  name                  = "ec2_role"
  force_detach_policies = true
  assume_role_policy    = data.aws_iam_policy_document.ec2_access_role_policy.json
}

resource "aws_iam_instance_profile" "ec2_role_profile" {
  name = "ec2-instance-role-profile"
  role = aws_iam_role.ec2_role.name
}


# ------------------------------------------------------------------
# ECS
# ------------------------------------------------------------------

resource "aws_iam_role" "ecs_service_role" {
  name               = "ecs_service_role"
  assume_role_policy = data.aws_iam_policy_document.ecs_service_policy.json
}

data "aws_iam_policy_document" "ecs_service_policy" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs.amazonaws.com"]
    }
  }
}

resource "aws_iam_role_policy" "ecs_service_role_policy" {
  name   = "ecs_service_role_policy"
  policy = data.aws_iam_policy_document.ecs_service_role_policy.json
  role   = aws_iam_role.ecs_service_role.id
}

data "aws_iam_policy_document" "ecs_service_role_policy" {
  statement {
    effect = "Allow"
    actions = ["ec2:AuthorizeSecurityGroupIngress",
      "ec2:Describe*",
      "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
      "elasticloadbalancing:DeregisterTargets",
      "elasticloadbalancing:Describe*",
      "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
      "elasticloadbalancing:RegisterTargets",
      "ec2:DescribeTags",
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:DescribeLogStreams",
      "logs:PutSubscriptionFilter",
      "logs:PutLogEvents"
    ]
    resources = ["*"]
  }
}

# ------------------------------------------------------------------
# ECS Task Execution
# ------------------------------------------------------------------

resource "aws_iam_role" "ecs_task_execution_role" {
  name               = "ecs_task_execution_role"
  assume_role_policy = data.aws_iam_policy_document.task_assume_role_policy.json
}

data "aws_iam_policy_document" "task_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role_policy" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role" "ecs_task_iam_role" {
  name               = "ecs_task_iam_role"
  assume_role_policy = data.aws_iam_policy_document.task_assume_role_policy.json
}
