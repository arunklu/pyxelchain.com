terraform {
  backend "s3" {
    bucket = "terrafrom-products"
    key    = "terraform-products"
    region = "us-east-2"

  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.5.3"
}


provider "aws" {
  #profile = "default"
  region = "us-east-2"
}

resource "aws_key_pair" "operator" {
  key_name   = "operator-key"
  public_key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINWp8T6ZPKiz6rgnI4L6BsHgv5LAgQQf8xUapT4QBW7E operator@localhost"
}

resource "aws_security_group" "allow_ssh" {
  name = "allow-ssh-sg"

  ingress {
    from_port   = "22"
    to_port     = "22"
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow_outbound" {
  name = "allow-outbound-sg"
  egress {
    from_port   = "0"
    to_port     = "0"
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "pyxelchain-website2" {
  ami           = var.instance_ami
  instance_type = "t3.medium"

  tags = {
    Name = "pyxelchain-website2-tf"
    env  = "pyxelchain-website2-tf-${var.env}"
  }

  key_name = "operator-key"

  subnet_id = aws_subnet.public_a.id

  vpc_security_group_ids = [
    "${aws_security_group.ssh.id}",
    "${aws_security_group.http.id}"
  ]

  associate_public_ip_address = true

  ebs_block_device {
    device_name           = "/dev/sdg"
    volume_type           = "gp2"
    volume_size           = 80
    delete_on_termination = true
    # snapshop_id           = ""
  }

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("./id_ed25519")
    host        = self.public_ip
    timeout     = "3m"
  }

  provisioner "file" {
    source      = "./scripts/docker-compose-nginx.yml"
    destination = "/tmp/docker-compose.yml"
  }

  provisioner "remote-exec" {
    scripts = [
      "./scripts/0.setup-server.bash",
    ]
  }

  provisioner "remote-exec" {
    scripts = [
      "./scripts/1.run-docker-nginx.bash",
    ]
  }

  provisioner "file" {
    source      = "./scripts/1.setup-project.bash"
    destination = "/tmp/script.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/script.sh",
      "/tmp/script.sh ${var.pyxelchain-domain}",
    ]
  }
}

resource "aws_eip" "instance_ip" {
  instance = aws_instance.pyxelchain-website2.id

  tags = {
    env = "pyxis-website-${var.env}"
  }
}

output "instance_ip" {
  value = aws_eip.instance_ip.public_ip
}

