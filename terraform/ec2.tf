data "aws_ami" "fck-nat-ami" {
  most_recent = true
  filter {
    name   = "name"
    values = ["fck-nat-al2023-*"]
  }
  filter {
    name   = "architecture"
    values = ["arm64"]
  }

  owners = ["568608671756"]
}

resource "aws_instance" "nat_instnace" {
  ami                         = data.aws_ami.fck-nat-ami.id
  instance_type               = "t4g.nano"
  subnet_id                   = aws_subnet.public_subnet.id
  vpc_security_group_ids      = [aws_security_group.nat_instance_sg.id]
  associate_public_ip_address = true
  source_dest_check           = false
  key_name                    = var.nat_instance_access_key

  root_block_device {
    volume_size = 8
    volume_type = "gp2"
    encrypted   = true
  }
}

resource "aws_eip" "nat_instance_eip" {
  instance = aws_instance.nat_instnace.id
  domain   = "vpc"
}
