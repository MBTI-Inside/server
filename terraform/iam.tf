# User, Group
# ------------------------------------------------------------------
resource "aws_iam_user" "mbti_cicd_user" {
  name = "mbti_cicd"
}

resource "aws_iam_user_policy_attachment" "this" {
  user       = aws_iam_user.mbti_cicd_user.name
  policy_arn = aws_iam_policy.user_role.arn
}

resource "aws_iam_policy" "user_role" {
  name        = "user_role"
  path        = "/"
  description = "Allows pass role"
  policy      = data.aws_iam_policy_document.user_role.json
}

data "aws_iam_policy_document" "user_role" {
  statement {
    effect    = "Allow"
    actions   = ["iam:PassRole"]
    resources = ["*"]
  }
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
    resources = [aws_iam_role.ecr_role.arn, aws_iam_role.lambda_role.arn]
  }

  # githuba actions lambda 임시코드
  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",

      "iam:ListRoles",

      "lambda:UpdateFunctionCode",
      "lambda:CreateFunction",
      "lambda:GetFunction",
      "lambda:GetFunctionConfiguration",
      "lambda:UpdateFunctionConfiguration",

      "ec2:CreateNetworkInterface",
      "ec2:DescribeNetworkInterfaces",
      "ec2:DescribeSubnets",
      "ec2:DeleteNetworkInterface",
      "ec2:AssignPrivateIpAddresses",
      "ec2:UnassignPrivateIpAddresses",
      "ec2:DescribeSecurityGroups",
      "ec2:DescribeSubnets",
      "ec2:DescribeVpcs",
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
    "logs:PutLogEvents"]
    resources = [aws_lambda_function.test_lambda.arn]
  }

  statement {
    effect = "Allow"
    actions = [
      "xray:PutTraceSegments",
      "xray:PutTelemetryRecords",
      "xray:GetSamplingRules",
      "xray:GetSamplingTargets",
      "xray:GetSamplingStatisticSummaries"
    ]
    resources = ["*"]
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
# Lambda Role
# ------------------------------------------------------------------
resource "aws_iam_role" "lambda_role" {
  name                  = "lambda_role"
  force_detach_policies = true
  assume_role_policy    = data.aws_iam_policy_document.lambda_role_policy_document.json
}


data "aws_iam_policy_document" "lambda_role_policy_document" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }

  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity", "sts:TagSession"]

    principals {
      type        = "Federated"
      identifiers = [var.github_actions_identity_provider_arn]
    }
    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:MBTI-Inside/server:*"]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }
  }
}

resource "aws_iam_policy_attachment" "lambda_role_attachment" {
  name       = "lambda_role_attachment"
  roles      = [aws_iam_role.lambda_role.name]
  policy_arn = aws_iam_policy.lambda_access_policy.arn
}

resource "aws_iam_policy" "lambda_access_policy" {
  name        = "lambda_access_policy"
  path        = "/"
  description = "Allows to access lambda"
  policy      = data.aws_iam_policy_document.lambda_access_policy_document.json
}

data "aws_iam_policy_document" "lambda_access_policy_document" {
  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",

      "iam:ListRoles",

      "lambda:UpdateFunctionCode",
      "lambda:CreateFunction",
      "lambda:GetFunction",
      "lambda:GetFunctionConfiguration",
      "lambda:UpdateFunctionConfiguration",

      "ec2:CreateNetworkInterface",
      "ec2:DescribeNetworkInterfaces",
      "ec2:DescribeSubnets",
      "ec2:DeleteNetworkInterface",
      "ec2:AssignPrivateIpAddresses",
      "ec2:UnassignPrivateIpAddresses",
      "ec2:DescribeSecurityGroups",
      "ec2:DescribeSubnets",
      "ec2:DescribeVpcs",
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",

      "xray:PutTraceSegments",
      "xray:PutTelemetryRecords",
      "xray:GetSamplingRules",
      "xray:GetSamplingTargets",
      "xray:GetSamplingStatisticSummaries"
    ]
    resources = [aws_lambda_function.test_lambda.arn]
  }

  statement {
    effect = "Allow"
    actions = [
      "xray:PutTraceSegments",
      "xray:PutTelemetryRecords",
      "xray:GetSamplingRules",
      "xray:GetSamplingTargets",
      "xray:GetSamplingStatisticSummaries",
      "iam:PassRole"
    ]
    resources = ["*"]
  }
}
