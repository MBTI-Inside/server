resource "aws_lambda_function" "test_lambda" {
  function_name = "mbti_backend"
  package_type  = "Image"
  role          = aws_iam_role.lambda_role.arn
  image_uri     = "013373444325.dkr.ecr.ap-northeast-2.amazonaws.com/cicd_repository:20240414T140835-c982338"
  memory_size   = "512"
  timeout       = "10"




  vpc_config {
    subnet_ids         = [aws_subnet.public_subnet.id, aws_subnet.public_subnet2.id]
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
