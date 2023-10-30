
resource "aws_instance" "ec2" {

  ami                    = data.aws_ami.ubuntu_latest.id
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
resource "aws_eip_association" "test" {
  instance_id   = aws_instance.ec2.id
  allocation_id = aws_eip.static_ip.allocation_id
  depends_on    = [aws_instance.ec2]

}

resource "aws_eip" "static_ip" {
  instance = aws_instance.ec2.id

}

resource "aws_key_pair" "ssh-key" {
  key_name   = "ssh-key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDYSKKMc+mAeVj+FoBdDrezw1d9Lm4s+sgRDdbEq59cKQnAoh9WryYy65MWJ35qx9f5Cr/aRCYjMzZ23VNB5EjHf0qVBQgrI2VnI1cbHEvXIKCEux0+2Ir5tFJejoIcGtFYyuhp+FXePenHI8JV959Ky28+4PUCKFGvXDB8urxL9mJZ+OcSQHoJAjukaFlNpOZ7j7SlmMz2T6uPunst8yGe12b40RXInIoefZd6QBlsiXHL6/BOFyXBlWa3RVVfQa2gbI47gi8tgxVUcSu3m73lkahoSdBpOqvQaa3CYO3AprEUGzOTfujC9As4sGDQfMiosgMMxxxY6lq9QDRcnn4lxeXQU0Z/TYXvLtbhbkHKR4LhGnjj1c8xY6+2UHLzTQuZCESAyGnutdrlhBYTJv72B7EHze5BDWsjNazYbbEyqm33b0GCs9KREgcSxXmFTm9cG9OdtR8IQW64qXRXQbI9v4rkKNxVqH1PpF8t04YcJkgbtzjvncjB3IpF3Z+gGOc= dell@Dell-Lattitude"
  # public_key = file("dove-key.pub")

}
