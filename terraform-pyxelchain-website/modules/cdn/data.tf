data "aws_acm_certificate" "ssl-certs" {
  domain = var.domain_name
}
