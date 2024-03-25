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

data "aws_iam_policy_document" "cicd_assume_role_policy_document" {
  statement {
    effect    = "Allow"
    actions   = ["sts:AssumeRole"]
    resources = [aws_iam_role.ecr_role.arn]

  }
}

resource "aws_iam_policy" "cicd_assume_role_policy" {
  name        = "cicd_assume_role_policy"
  path        = "/"
  description = "Allows to assume role in another AWS account"
  policy      = data.aws_iam_policy_document.cicd_assume_role_policy_document.json
}

resource "aws_iam_group_policy_attachment" "this" {
  group      = aws_iam_group.cicd_group.name
  policy_arn = aws_iam_policy.cicd_assume_role_policy.arn
}

# ecr policy document
data "aws_iam_policy_document" "ecr_access_policy_document" {
  statement {
    effect    = "Allow"
    actions   = ["ecr:*"]
    resources = [aws_ecr_repository.ecr_repository.arn]
  }

  statement {
    actions = ["ecr:GetAuthorizationToken"]

    resources = ["*"]
  }
}

# ecr policy 
resource "aws_iam_policy" "ecr_access_policy" {
  name        = "ecr_access_policy"
  path        = "/"
  description = "Allows to access ECR"
  policy      = data.aws_iam_policy_document.ecr_access_policy_document.json
}

# ecr assume role policy document
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



# ecr role 생성
# assume role policy는 role의 policy와 별개로 지정
resource "aws_iam_role" "ecr_role" {
  name                  = "ecr_role"
  force_detach_policies = true
  assume_role_policy    = data.aws_iam_policy_document.ecr_role_policy_document.json
}

# ecr role과 ecr policy 연결
resource "aws_iam_policy_attachment" "ecr_role_attachment" {
  name       = "ecr_role_attachment"
  roles      = [aws_iam_role.ecr_role.name]
  policy_arn = aws_iam_policy.ecr_access_policy.arn
}


# ecr
resource "aws_ecr_repository" "ecr_repository" {
  name                 = "cicd_repository"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
  image_scanning_configuration {
    scan_on_push = true
  }
}


# # ecr policy
# data "aws_iam_policy_document" "ecr_policy_document" {
#   statement {
#     sid       = "cicd policy"
#     effect    = "Allow"
#     resources = [aws_ecr_repository.ecr_repository.arn]
#     actions   = ["ecr:*"]
#     principals {
#       type        = "AWS"
#       identifiers = [aws_iam_role.ecr_role.arn]
#     }
#   }
# }

# # ecr policy attachment
# resource "aws_ecr_repository_policy" "ecr_repository_policy" {
#   repository = aws_ecr_repository.ecr_repository.name
#   policy     = data.aws_iam_policy_document.ecr_policy_document.json
# }
