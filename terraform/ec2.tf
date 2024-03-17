resource "aws_network_interface" "ec2_ni" {
  subnet_id   = aws_subnet.public_subnet.id
  private_ips = ["10.0.0.10"]

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

resource "aws_instance" "backend-server" {
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

resource "aws_eip" "backend-server-eip" {
  domain = "vpc"

  instance = aws_instance.backend-server.id
}


