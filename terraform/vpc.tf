resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name = "MBTI-VPC"
  }
}

resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(aws_vpc.main.cidr_block, 8, 1)
  map_public_ip_on_launch = true
  availability_zone       = "ap-northeast-2a"

  depends_on = [aws_internet_gateway.igw]
}

resource "aws_subnet" "public_subnet2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(aws_vpc.main.cidr_block, 8, 2)
  map_public_ip_on_launch = true
  availability_zone       = "ap-northeast-2b"
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "MBTI-igw"
  }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "MBTI-RT-public"
  }
}

resource "aws_route_table_association" "subnet_route" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "subnet2_route" {
  subnet_id      = aws_subnet.public_subnet2.id
  route_table_id = aws_route_table.public.id
}

# security group
resource "aws_security_group" "backend_server_sg" {
  name        = "backend-server-sg"
  description = "Security Group for MBTI Backend Server"
  vpc_id      = aws_vpc.main.id

  tags = {
    Name = "MBTI-sg"
  }
}

resource "aws_vpc_security_group_ingress_rule" "backend_server_sg_ingress_rule" {
  security_group_id = aws_security_group.backend_server_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  ip_protocol       = "tcp"
  to_port           = 22
}

resource "aws_vpc_security_group_ingress_rule" "backend_server_sg_ingress_rule_tcp" {
  security_group_id = aws_security_group.backend_server_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 80
  ip_protocol       = "tcp"
  to_port           = 80
}

resource "aws_vpc_security_group_ingress_rule" "backend_server_sg_ingress_rule_mongo" {
  security_group_id = aws_security_group.backend_server_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 27017
  ip_protocol       = "tcp"
  to_port           = 27017
}

resource "aws_vpc_security_group_egress_rule" "backend_server_sg_ingress_rule" {
  security_group_id = aws_security_group.backend_server_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}
