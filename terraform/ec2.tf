resource "aws_network_interface" "ec2_ni" {
  subnet_id   = aws_subnet.public_subnet.id
  private_ips = ["10.0.0.10"]

  security_groups = [aws_security_group.backend_server_sg.id]
  tags = {
    Name = "MBTI-Network-Interface"
  }
}

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

resource "aws_instance" "backend_server" {
  ami           = data.aws_ami.this.id
  instance_type = "t3.micro"
  key_name      = var.access_key_backend_server

  network_interface {
    network_interface_id = aws_network_interface.ec2_ni.id
    device_index         = 0
  }

  tags = {
    Name = "MBTI-Backend-Server"
  }
}

resource "aws_eip" "backend_server_eip" {
  domain = "vpc"
}

resource "aws_eip_association" "backend_server_eip_association" {
  instance_id   = aws_instance.backend_server.id
  allocation_id = aws_eip.backend_server_eip.id
}

resource "aws_launch_template" "ecs_launch_template" {
  name_prefix   = "ecs-template"
  image_id      = "ami-062c116e449466e7f"
  instance_type = "t3.micro"

  key_name = var.access_key_backend_server

  iam_instance_profile {
    name = "ecsInstanceRole"
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

  user_data = filebase64("userdata.sh")
}
