variable "bucket_name" {
  description = "Name of the S3 bucket"
  type        = string
}

variable "index_document" {
  description = "Name of the index document for the static website"
  type        = string
  default     = "index.html"
}

variable "block_public_acls" {
  default = true

}

variable "block_public_policy" {
  default = true

}

variable "ignore_public_acls" {
  default = true

}

variable "restrict_public_buckets" {
  default = true

}


