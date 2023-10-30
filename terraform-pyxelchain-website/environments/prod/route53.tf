
resource "aws_route53_record" "root-cdn" {
  zone_id = data.aws_route53_zone.main.id
  name    = var.domain_name
  type    = "A"
  alias {
    evaluate_target_health = false
    name                   = module.cloudfront_distribution.cloudfront_domain_name
    zone_id                = module.cloudfront_distribution.cloudfront_hosted_zone
  }
}

resource "aws_route53_record" "www-cdn" {
  zone_id = data.aws_route53_zone.main.id
  name    = "www.${var.domain_name}"
  type    = "A"
  alias {
    evaluate_target_health = false
    name                   = module.cloudfront_distribution.cloudfront_domain_name
    zone_id                = module.cloudfront_distribution.cloudfront_hosted_zone
  }

}

resource "aws_route53_record" "ec2-record" {
  zone_id = data.aws_route53_zone.main.id
  name    = "strapi.${var.domain_name}"
  type    = "A"
  ttl     = 60
  records = [module.ec2.static_ip]

}
