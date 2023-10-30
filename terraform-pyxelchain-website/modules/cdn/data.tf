data "aws_acm_certificate" "ssl-certs" {
  domain = var.domain_name
}


data "aws_route53_zone" "main" {
  name = var.domain_name
}
