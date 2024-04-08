# 참고 https://spacelift.io/blog/terraform-ecs#3-configuring-the-ecs-cluster
resource "aws_ecs_cluster" "this" {
  name = "mbti-ecs-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_ecs_capacity_provider" "ecs_capacity_provider" {
  name = "mbti-ecs-capacity-provider"
  auto_scaling_group_provider {
    auto_scaling_group_arn = aws_autoscaling_group.ecs_asg.arn
    managed_scaling {
      maximum_scaling_step_size = 1000
      minimum_scaling_step_size = 1
      status                    = "ENABLED"
      target_capacity           = 3
    }
  }
}

resource "aws_ecs_cluster_capacity_providers" "example" {
  cluster_name = aws_ecs_cluster.this.name

  capacity_providers = [aws_ecs_capacity_provider.ecs_capacity_provider.name]

  default_capacity_provider_strategy {
    base              = 1
    weight            = 100
    capacity_provider = aws_ecs_capacity_provider.ecs_capacity_provider.name
  }
}

resource "aws_ecs_task_definition" "mbti_backend_server" {
  family             = "mbti-backend-server"
  network_mode       = "awsvpc"
  execution_role_arn = aws_iam_role.ecs_task_execution_role.arn
  # task_role_arn = aws_iam_role.ecs_task_iam_role.arn
  container_definitions = jsonencode([
    {
      name      = "mbti-backend-server"
      image     = var.ecs_image_tag
      cpu       = 1000
      memory    = 1024
      essential = true
      portMappings = [
        {
          containerPort = 4000
          hostPort      = 80
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
  desired_count = 2
  network_configuration {
    subnets         = [aws_subnet.public_subnet.id]
    security_groups = [aws_security_group.backend_server_sg.id]
  }
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

  force_new_deployment = true
  triggers = {
    redeployment = plantimestamp()
  }


  placement_constraints {
    type       = "memberOf"
    expression = "attribute:ecs.availability-zone in [ap-northeast-2]"
  }

  placement_constraints {
    type = "distinctInstance"
  }

  capacity_provider_strategy {
    capacity_provider = aws_ecs_capacity_provider.ecs_capacity_provider.name
    weight            = 100
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.ecs_tg.arn
    container_name   = "mbti-backend-server"
    container_port   = 4000
  }

  depends_on = [aws_autoscaling_group.ecs_asg]
}

# resource "aws_lb_target_group" "mbti_alb" {
#   name                 = "mbti-alb"
#   target_type          = "alb"
#   port                 = 80
#   protocol             = "TCP"
#   vpc_id               = aws_vpc.main.id
#   deregistration_delay = 120
# }
