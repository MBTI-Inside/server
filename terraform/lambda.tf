resource "aws_lambda_function" "test_lambda" {
  function_name = "mbti_backend"
  package_type  = "Image"
  role          = aws_iam_role.lambda_role.arn
  image_uri     = "013373444325.dkr.ecr.ap-northeast-2.amazonaws.com/cicd_repository:20240515T084015-282ca84"
  memory_size   = "1024"
  timeout       = "900"




  vpc_config {
    subnet_ids = [
      aws_subnet.private_subnet.id
    ]
    security_group_ids = [aws_security_group.backend_server_sg.id]
  }

  environment {
    variables = {
      foo = "bar"
    }
  }

  ephemeral_storage {
    size = 1024
  }

  logging_config {
    log_format = "JSON"
  }
  depends_on = []
}
