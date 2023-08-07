# Used to tag resources
variable "env" { default = "terraform" }
variable "aws_region"      { default = "us-east-2" }
variable "aws_subregion_a" { default = "us-east-2a" }
variable "instance_ami"  { default = "ami-06c7d6c0987eaa46c" }
variable "aws_access_key" { default = "ASIASNUU6P2WT5BF674Q" }
variable "aws_secret_key" { default = "mbKIkqLxGISvmOq+YWAiGjwPgdVsSkuJQ8/GXAmH" }
variable "pyxelchain-domain" { default = "pyxis-web-tf.gameficap.com" }

variable "region" {
  description = "AWS region to manage resources in"
  type        = string
  default     = "us-east-2" # Just for dev
}

variable "instance_name" {
  description = "pyxis-website"
  type        = string
  default     = "Docker host for Test Net containers"
}

variable "instance_type" {
  description = "EC2 instance type tag e.g. t2.micro"
  type        = string
  default     = "t3.medium" # t3.xlarge?
}

variable "subnet_id" {}

variable "ami" {
  description = "EC2 instance image to use - per region. See https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html"
  type        = string
  default     = "ami-0df2643dffb0fed91"
}
