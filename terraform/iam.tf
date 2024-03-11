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

data "aws_iam_policy_document" "assume_role" {
  statement {
    effect    = "Allow"
    actions   = ["sts:AssumeRole"]
    resources = ["arn:aws:ecr::*"]
  }
}

resource "aws_iam_policy" "this" {
  name        = "assume_role_policy"
  path        = "/"
  description = "Allows to assume role in another AWS account"
  policy      = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_group_policy_attachment" "this" {
  group      = aws_iam_group.cicd_group.name
  policy_arn = aws_iam_policy.this.arn
}

# # 권한을 빌릴 수 있는 권한 정의
# data "aws_iam_policy_document" "assume_role" {
#   statement {
#     effect = "Allow"

#     principals {
#       type        = "Service"
#       identifiers = ["ec2.amazonaws.com"]
#     }

#     actions = ["sts:AssumeRole"]
#   }
# }

# # role 생성
# resource "aws_iam_role" "assume_role" {
#   name                  = "assume_role"
#   force_detach_policies = true
#   assume_role_policy    = data.aws_iam_policy_document.assume_role.json
# }

# # ECR 접근 허용 정책 정의
# data "aws_iam_policy_document" "ecr_policy" {
#   statement {
#     effect = "Allow"

#     actions = [
#       "ecr:*"
#     ]

#     resources = ["*"]
#   }
# }

# # ECR 접근 허용 정책 생성
# resource "aws_iam_policy" "ecr_policy" {
#   name   = "ecr_policy"
#   policy = data.aws_iam_policy_document.ecr_policy.json
# }


# #  ecr 정책과 role 연결
# resource "aws_iam_policy_attachment" "ecr_policy" {
#   name       = "ecr_policy_attachment"
#   roles      = [aws_iam_role.assume_role.name]
#   policy_arn = aws_iam_policy.ecr_policy.arn
# }

# # ec2 instance profile 생성
# resource "aws_iam_instance_profile" "assume_role_profile" {
#   name = "assume_role_profile"
#   role = aws_iam_role.assume_role.name
# }
