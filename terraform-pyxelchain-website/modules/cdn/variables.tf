variable "environment" {
  default = ["prod", "qa", "staging", "dev"]
  # default = "prod"
}

variable "domain_name" {
  default = "pyxelchain.com"
  type    = string
}



variable "viewer_certificate" {
  description = "The SSL configuration for this distribution"
  type        = any
  default = {
    cloudfront_default_certificate = true
    minimum_protocol_version       = "TLSv1"
  }
}

variable "aws_region" {
  default = "us-east-1"
}

variable "ssl_support_method" {
  default = "sni-only"
}

variable "acm_certificate_arn" {
  type    = string
  default = ""

}

# variable "s3_domain_name" {

# }

# variable "s3_origin_id" {

# }

# variable "origin_id" {

# }

# variable "website_endpoint" {

# }
