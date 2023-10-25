
resource "aws_instance" "ec2" {

  ami                    = var.ami
  instance_type          = var.instance_type
  availability_zone      = var.availability_zone
  subnet_id              = var.subnet_id
  vpc_security_group_ids = var.vpc_security_group_ids
  key_name               = var.key_name
  tags = {
    Name = "${var.domain_name}-${var.environment}-Server"
  }

  root_block_device {
    volume_size = var.root_block_device


  }

}

resource "aws_key_pair" "ssh-key" {
  key_name   = "operator-key"
  public_key = "id_ed25519.pub"
}
