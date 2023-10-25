resource "aws_s3_bucket" "s3-bucket" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_policy" "bucket-policy" {
  bucket = aws_s3_bucket.s3-bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.s3-bucket.arn}/*"
      },
    ]
  })
}

resource "aws_s3_bucket_website_configuration" "static-website" {
  bucket = aws_s3_bucket.s3-bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "s3-public-access" {
  bucket = aws_s3_bucket.s3-bucket.id

  block_public_acls       = var.block_public_acls
  block_public_policy     = var.block_public_policy
  ignore_public_acls      = var.ignore_public_acls
  restrict_public_buckets = var.restrict_public_buckets
}

resource "aws_s3_bucket_ownership_controls" "s3-ownership" {
  bucket = aws_s3_bucket.s3-bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}


resource "aws_s3_bucket_acl" "s3-bucket-acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.s3-ownership,
    aws_s3_bucket_public_access_block.s3-public-access,
  ]

  bucket = aws_s3_bucket.s3-bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_versioning" "s3-bucket-versioning" {
  bucket = aws_s3_bucket.s3-bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}



# resource "aws_s3_bucket_policy" "bucket-policy" {
#   bucket = var.bucket_name
#   policy = <<EOF
# {
#   "Version": "2012-10-17",
#   "Statement": [
#     {
#       "Sid":"PublicReadGetObject",
#       "Effect":"Allow",
#       "Principal": "*",
#       "Action":["s3:GetObject"],
#       "Resource":["arn:aws:s3:::${var.bucket_name}/*"]
#     }
#   ]
# }
# EOF


# }
