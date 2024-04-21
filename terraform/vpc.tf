resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name = "MBTI-VPC"
  }
}


resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "MBTI-igw"
  }
}

# public

resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(aws_vpc.main.cidr_block, 8, 1)
  map_public_ip_on_launch = true
  availability_zone       = "ap-northeast-2a"

  depends_on = [aws_internet_gateway.igw]

  tags = {
    Name = "MBTI-subnet-public"
  }
}



resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "MBTI-RT-public-routing-table"
  }
}

resource "aws_route_table_association" "subnet_route" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public.id
}


# private
resource "aws_subnet" "private_subnet" {
  vpc_id     = aws_vpc.main.id
  cidr_block = cidrsubnet(aws_vpc.main.cidr_block, 8, 3)

  tags = {
    Name = "MBTI-subnet-private"
  }
}

resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "MBTI-private-routing-table"
  }
}

resource "aws_route_table_association" "private" {
  subnet_id      = aws_subnet.private_subnet.id
  route_table_id = aws_route_table.private.id
}


resource "aws_route" "private" {
  route_table_id         = aws_route_table.private.id
  destination_cidr_block = "0.0.0.0/0"
  network_interface_id   = aws_instance.nat_instnace.primary_network_interface_id
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
  cidr_ipv4         = aws_subnet.public_subnet.cidr_block
  ip_protocol       = "-1"
}

resource "aws_vpc_security_group_egress_rule" "backend_server_sg_ingress_rule" {
  security_group_id = aws_security_group.backend_server_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}

# nat instance security group
resource "aws_security_group" "nat_instance_sg" {
  name        = "nat-instance-sg"
  description = "Security Group for NAT Instance"
  vpc_id      = aws_vpc.main.id

  tags = {
    Name = "MBTI-nat-sg"
  }
}

resource "aws_vpc_security_group_ingress_rule" "nat_ssh" {
  security_group_id = aws_security_group.nat_instance_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  to_port           = 22
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "nat_from_vpc" {
  security_group_id = aws_security_group.nat_instance_sg.id
  cidr_ipv4         = aws_vpc.main.cidr_block
  ip_protocol       = "-1"
}

resource "aws_vpc_security_group_egress_rule" "nat_all" {
  security_group_id = aws_security_group.nat_instance_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
}
