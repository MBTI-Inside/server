resource "aws_ecs_cluster" "this" {
  name = "mbti-ecs-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_ecs_task_definition" "mbti_backend_server" {
  family = "mbti-backend-server"
  # execution_role_arn = aws_iam_role.ecs_task_execution_role.arn
  # task_role_arn      = aws_iam_role.ecs_task_iam_role.arn
  container_definitions = jsonencode([
    {
      name      = "mbti-backend-server"
      image     = var.ecs_image_tag
      cpu       = 1000
      memory    = 1024
      essential = true
      portMappings = [
        {
          containerPort = 80
          hostPort      = 4000
          protocol      = "tcp"
        }
      ]
    }
  ])

  volume {
    name      = "mbti-backend-server"
    host_path = "/ecs/service-storage"
  }
  placement_constraints {
    type       = "memberOf"
    expression = "attribute:ecs.availability-zone in [ap-northeast-2]"
  }
}

resource "aws_ecs_service" "mbti_backend_server" {
  name            = "mbti_ecs_service_backend_server"
  cluster         = aws_ecs_cluster.this.id
  task_definition = aws_ecs_task_definition.mbti_backend_server.arn
  # iam_role        = aws_iam_role.ecs_service_role.arn
  desired_count = 1
  deployment_circuit_breaker {
    enable   = true
    rollback = true
  }

  ordered_placement_strategy {
    type  = "binpack"
    field = "cpu"
  }

  ordered_placement_strategy {
    type  = "spread"
    field = "attribute:ecs.availability-zone"
  }

  # load_balancer {
  #   target_group_arn = aws_lb_target_group.mbti_alb.arn
  #   container_name   = "mbti-backend-server"
  #   container_port   = 4000
  # }

  force_new_deployment = true
  triggers = {
    redeployment = plantimestamp()
  }


  placement_constraints {
    type       = "memberOf"
    expression = "attribute:ecs.availability-zone in [ap-northeast-2]"
  }


}

# resource "aws_lb_target_group" "mbti_alb" {
#   name                 = "mbti-alb"
#   target_type          = "alb"
#   port                 = 80
#   protocol             = "TCP"
#   vpc_id               = aws_vpc.main.id
#   deregistration_delay = 120
# }
