locals {
  s3_origin_id   = "${var.domain_name}-${var.environment}-origin"
  s3_domain_name = "${var.domain_name}-${var.environment}.s3-website.${var.aws_region}.amazonaws.com"
}


