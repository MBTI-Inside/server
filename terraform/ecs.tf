resource "aws_ecs_cluster" "this" {
  name = "mbti-ecs-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

# resource "aws_ecs_service" "mbti_backend_server" {
#   name            = "mbti_backend_server"
#   cluster         = aws_ecs_cluster.this.id
#   task_definition = aws_ecs_task_definition.mbti_backend_server.arn
#   desired_count   = 1

#   ordered_placement_strategy {
#     type  = "binpack"
#     field = "cpu"
#   }

#   ordered_placement_strategy {
#     type  = "spread"
#     field = "attribute:ecs.availability-zone"
#   }

#   force_new_deployment = true
#   triggers = {
#     redeployment = plantimestamp()
#   }

#   placement_constraints {
#     type       = "memberOf"
#     expression = "attribute:ecs.availability-zone in [ap-northeast-2]"
#   }
# }
