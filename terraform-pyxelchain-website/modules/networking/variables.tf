variable "aws_region" {
  default = "us-east-1"
}

variable "cidr_block" {
  description = "CIDR block for the VPC."
  type        = string


}

variable "environment" {
  type        = string
  description = "Environment name to be used as a prefix on resources that need naming."


}

variable "region_name" {
  type        = string
  description = "Region Name of AWS Account where resources will be deployed"
  default     = "us-east-1"

}

variable "public-subnets" {
  type = list(string)


}

variable "private-subnets" {
  type = list(string)


}

variable "avail_az" {
  type = list(string)


}



