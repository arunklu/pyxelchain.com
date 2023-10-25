resource "aws_route53_record" "root-a" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = module.cloudfront_distribution.cloudfront_domain_name
    zone_id                = module.cloudfront_distribution.cloudfront_hosted_zone
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-a" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.sub_domain
  type    = "CNAME"

  alias {

    name                   = module.cloudfront_distribution.cloudfront_domain_name
    zone_id                = module.cloudfront_distribution.cloudfront_hosted_zone
    evaluate_target_health = false
  }
}
