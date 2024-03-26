resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "MBTI-VPC"
  }
}

resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.0.0/24"
  map_public_ip_on_launch = true

  depends_on = [aws_internet_gateway.igw]

  tags = {
    Name = "MBTI-VPC-public-subnet"
  }
}

# resource "aws_subnet" "private_subnet" {
#   vpc_id     = aws_vpc.main.id
#   cidr_block = "10.0.10.0/24"

#   availability_zone = "ap-northeast-2a"

#   tags = {
#     Name = "MBTI-VPC-private-subnet"
#   }
# }

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "MBTI-igw"
  }
}

# resource "aws_eip" "nat" {
#   domain = "vpc"

#   lifecycle {
#     create_before_destroy = true
#   }
# }

# resource "aws_nat_gateway" "natgw" {
#   allocation_id = aws_eip.nat.id

#   subnet_id = aws_subnet.public_subnet.id

#   tags = {
#     Name = "MBTI-NATGW"
#   }
# }

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

resource "aws_route_table_association" "route_table_association_public" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public.id
}

# resource "aws_route_table" "private" {
#   vpc_id = aws_vpc.main.id

#   tags = {
#     Name = "MBTI-RT-private"
#   }
# }

# resource "aws_route_table_association" "route_table_association_private" {
#   subnet_id      = aws_subnet.private_subnet.id
#   route_table_id = aws_route_table.private.id
# }

# resource "aws_route" "private_nat" {
#   route_table_id         = aws_route_table.private.id
#   destination_cidr_block = "0.0.0.0/0"
#   nat_gateway_id         = aws_nat_gateway.natgw.id
# }

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

resource "aws_vpc_security_group_egress_rule" "backend_server_sg_ingress_rule" {
  security_group_id = aws_security_group.backend_server_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}
