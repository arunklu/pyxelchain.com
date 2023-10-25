variable "environment" {
  # default = ["prod","qa","staging"]
  default = ""
}

variable "domain_name" {
  default = "devopsit.in"
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

variable "acm_certificate_arn" {
  type    = string
  default = ""

}

variable "ssl_support_method" {
  default = "sni-only"
}

