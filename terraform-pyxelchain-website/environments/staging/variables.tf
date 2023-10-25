
variable "aws_access_key" {

  default = "AKIA36N4RHHKB2YX2VFJ"
}
variable "aws_secret_key" {
  default = "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"
}

variable "aws_region" {
  default = "us-east-1"
}

variable "domain_name" {
  default = "devopsit.in"
}

variable "sub_domain" {
  default = "www.devopsit.in"

}

variable "environment" {
  default = "dev"
}

variable "acm_certificate_arn" {
  type    = any
  default = ""
  #  default = "arn:aws:acm:us-east-1:821271017940:certificate/476e2d89-c04e-45d9-ac53-a2475e9f3501"

}

variable "ssl_support_method" {
  default = "sni-only"
}

variable "public-subnets" {
  type    = list(string)
  default = ["192.168.1.0/24", "192.168.2.0/24"]

}

variable "private-subnets" {
  type    = list(string)
  default = ["192.168.3.0/24", "192.168.4.0/24"]

}

variable "avail_az" {
  type    = list(string)
  default = ["us-east-1a", "us-east-1b"]

}

variable "cidr_block" {
  description = "The top level CIDR block for the VPC."
  default     = "192.168.0.0/16"

}

variable "ami" {
  default = "ami-0ff834984748eaef2"

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
