
variable "aws_access_key" {

  default = ""
}
variable "aws_secret_key" {
  default = ""
}

variable "aws_region" {
  default = "us-east-1"
}

variable "domain_name" {
  default = "pyxelchain.com"
}

variable "environment" {
  default = "production"
}

variable "acm_certificate_arn" {
  type    = string
  default = ""
  #  default = "arn:aws:acm:us-east-1:821271017940:certificate/859839ce-6e16-4350-93e9-8882037b724b"

}

variable "ssl_support_method" {
  default = "sni-only"
}

variable "public-subnets" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24"]

}

variable "private-subnets" {
  type    = list(string)
  default = ["10.0.3.0/24", "10.0.4.0/24"]

}

variable "avail_az" {
  type    = list(string)
  default = ["us-east-1a", "us-east-1b"]

}

variable "cidr_block" {
  description = "The top level CIDR block for the VPC."
  default     = "10.0.0.0/16"

}

variable "ami" {
  default = ""

}

variable "instance_type" {
  default = "t3a.medium"

}



variable "root_block_device" {
  default = "30"

}



variable "vpc_security_group_ids" {
  type    = list(string)
  default = [""]
}

variable "provisioner" {
  default = ""

}

variable "subnet_id" {
  description = "The VPC Subnet ID to launch in"
  type        = string
  default     = null
}
