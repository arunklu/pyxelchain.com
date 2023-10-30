resource "aws_cloudfront_distribution" "main" {
  origin {
    domain_name = local.s3_domain_name
    origin_id   = local.s3_origin_id
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "My CloudFront distribution"
  default_root_object = "index.html"
  price_class         = "PriceClass_All"
  aliases             = var.environment == "qa" ? ["qa.${var.domain_name}"] : var.environment == "staging" ? ["staging.${var.domain_name}"] : var.environment == "dev" ? ["dev.${var.domain_name}"] : var.environment == "production" ? ["www.${var.domain_name}", "${var.domain_name}"] : []



  custom_error_response {
    error_caching_min_ttl = 0
    error_code            = 404
    response_code         = 200
    # response_page_path    = "/404.html"
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 31536000
    default_ttl            = 31536000
    max_ttl                = 31536000
    compress               = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }

}
