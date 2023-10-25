output "bucket_name" {
  description = "Name of the created S3 bucket"
  value       = aws_s3_bucket.s3-bucket.arn
}

output "website_endpoint" {
  description = "Endpoint URL for the static website"
  value       = aws_s3_bucket.s3-bucket.website_endpoint
}

output "bucket_id" {
  value = aws_s3_bucket.s3-bucket.id
}

output "bucket_arn" {
  value = aws_s3_bucket.s3-bucket.arn
}
