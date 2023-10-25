resource "aws_vpc" "main-vpc" {
  cidr_block           = var.cidr_block
  enable_dns_hostnames = true

  tags = {
    Name = "${var.environment}"
  }

}


resource "aws_internet_gateway" "main-igw" {
  vpc_id = aws_vpc.main-vpc.id
  tags = {
    Name = "${var.environment}-IGW"
  }

}

resource "aws_subnet" "public-subnets" {
  count                   = length(var.public-subnets)
  vpc_id                  = aws_vpc.main-vpc.id
  cidr_block              = element(var.public-subnets, count.index)
  map_public_ip_on_launch = true
  availability_zone       = element(var.avail_az, count.index)
  tags = {
    Name = "${var.environment}-public-subnet-${element(var.avail_az, count.index)}"
  }
}

resource "aws_subnet" "private-subnets" {
  count                   = length(var.private-subnets)
  vpc_id                  = aws_vpc.main-vpc.id
  cidr_block              = element(var.private-subnets, count.index)
  map_public_ip_on_launch = false
  availability_zone       = element(var.avail_az, count.index)
  tags = {
    Name = "${var.environment}-private-subnet-${element(var.avail_az, count.index)}"
  }
}

resource "aws_route_table" "public-rt" {
  vpc_id = aws_vpc.main-vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main-igw.id

  }
  tags = {
    Name = "${var.environment}-PublicRouteTable"
  }

}

resource "aws_route_table_association" "public" {
  count          = length(var.public-subnets)
  subnet_id      = element(aws_subnet.public-subnets.*.id, count.index)
  route_table_id = aws_route_table.public-rt.id


}


resource "aws_security_group" "web-access" {
  vpc_id      = aws_vpc.main-vpc.id
  name        = "${var.environment}-sg-allow-http"
  description = "Allow HTTP access to the web servers"
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]

  }

  tags = {
    Name = "web-sg"
  }

}

resource "aws_security_group" "ssh-access" {
  vpc_id      = aws_vpc.main-vpc.id
  name        = "${var.environment}-sg-allow-ssh"
  description = "Allow SSH access to the bastion host"
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]

  }

  tags = {
    Name = "ssh-access"
  }

}
