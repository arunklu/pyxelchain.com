resource "aws_route53_record" "root-a" {
  #  zone_id = aws_route53_zone.main.zone_id
  zone_id = data.aws_route53_zone.main.zone_id
  name    = "${var.environment}.${var.domain_name}"
  type    = "A"

  alias {
    name                   = module.cloudfront_distribution.cloudfront_domain_name
    zone_id                = module.cloudfront_distribution.cloudfront_hosted_zone
    evaluate_target_health = false
  }
}

# resource "aws_route53_record" "www-a" {
#   #  zone_id = aws_route53_zone.main.zone_id
#   zone_id = data.aws_route53_zone.main.zone_id
#   name    = var.sub_domain
#   type    = "CNAME"

#   alias {

#     name    = module.cloudfront_distribution.cloudfront_domain_name
#     zone_id = module.cloudfront_distribution.cloudfront_hosted_zone
#     #  zone_id                = aws_cloudfront_distribution.www_s3_distribution.hosted_zone_id
#     #  name                   = aws_cloudfront_distribution.www_s3_distribution.domain_name

#     evaluate_target_health = false
#   }
# }
