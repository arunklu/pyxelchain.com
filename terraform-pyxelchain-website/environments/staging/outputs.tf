# output "bucket_name" {
#   value = module.s3_static_website.bucket_name
# }

output "website_endpoint" {
  value = module.s3_static_website.website_endpoint
}

# output "cloudfront_domain_name" {
#   description = "The domain name of the CloudFront distribution"
#   value       = module.cloudfront_distribution.cloudfront_domain_name
# }

output "server-ip" {
  value = module.ec2.static_ip

}

# output "ec2-hostname" {
#   value = aws_route53_record.ec2-record.fqdn

# }

output "cdn-A" {
  value = aws_route53_record.root-cdn.fqdn

}

# output "cdn-www" {
#   value = aws_route53_record.www-cdn.fqdn

# }


output "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution"
  value       = module.cloudfront_distribution.cloudfront_domain_name
}

# output "ssl" {
#   value = module.cloudfront_distribution.ssl-certificates.arn
# }

output "route53" {
  value = data.aws_route53_zone.main.name
}

output "s3-website_endpoint" {
  value = module.s3_static_website.website_endpoint

}
