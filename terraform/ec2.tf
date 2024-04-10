data "aws_ami" "this" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-gp2"]
  }
  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }
  filter {
    name   = "architecture"
    values = ["x86_64"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_launch_template" "ecs_launch_template" {
  name_prefix   = "ecs-template"
  image_id      = data.aws_ami.this.id
  instance_type = "t3.micro"

  key_name               = var.access_key_backend_server
  vpc_security_group_ids = [aws_security_group.backend_server_sg.id]

  iam_instance_profile {
    name = aws_iam_instance_profile.ec2_role_profile.name
  }

  block_device_mappings {
    device_name = "/dev/xvda"
    ebs {
      volume_size = 30
      volume_type = "gp2"
    }
  }

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "MBTI-ECS-Instance"
    }
  }

  user_data = filebase64("${path.module}/userdata.sh")
}
