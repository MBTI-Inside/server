resource "aws_cloudwatch_log_group" "lambda_cloudwatch" {
  name              = "/aws/lambda/backend/${aws_lambda_function.test_lambda.function_name}"
  retention_in_days = 14
}
