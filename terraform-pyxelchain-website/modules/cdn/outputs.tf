output "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.main.domain_name
}

output "cloudfront_hosted_zone" {
  description = "The Route53 hosted zone ID for the CloudFront distribution."
  value       = aws_cloudfront_distribution.main.hosted_zone_id

}

# output "ssl-certificates" {
#   description = "SSL certificates used by the CloudFront Distribution"
#   value = data.aws_acm_certificate.ssl-certificates.arn
#
#
# }
