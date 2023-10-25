variable "access_key" {
  default = ""

}

variable "secret_key" {
  default = ""

}

variable "region_name" {
  default = "us-east-1"

}


variable "environment" {
  type        = string
  description = "Environment name to be used as a prefix on resources that need naming."
  default     = ""


}

variable "domain_name" {
  type    = string
  default = ""

}

variable "ami" {
  description = "ID of AMI to use for the instance"
  type        = string
  # default     = null
  default = "ami-0ff834984748eaef2"
}

variable "associate_public_ip_address" {
  description = "Whether to associate a public IP address with an instance in a VPC"
  type        = bool
  default     = null
}
variable "availability_zone" {
  description = "AZ to start the instance in"
  type        = string
  default     = null
}

variable "instance_type" {
  description = "The type of instance to start"
  type        = string
  default     = ""
}

variable "key_name" {
  description = "Key name of the Key Pair to use for the instance; which can be managed using the `aws_key_pair` resource"
  type        = string
  default     = null
}

variable "subnet_id" {
  description = "The VPC Subnet ID to launch in"
  type        = string
  default     = null
}
variable "vpc_security_group_ids" {
  description = "A list of security group IDs to associate with"
  type        = list(string)
  default     = null
}

variable "aws_region" {
  default = "us-east-1"
}

variable "root_block_device" {
  description = "Customize details about the root block device of the instance"
  default     = "30"

}


