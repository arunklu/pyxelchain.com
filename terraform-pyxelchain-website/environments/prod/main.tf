module "s3_static_website" {
  source = "../../modules/s3-static"

  bucket_name             = "${var.domain_name}-${var.environment}"
  index_document          = "index.html"
  block_public_acls       = false
  ignore_public_acls      = false
  block_public_policy     = false
  restrict_public_buckets = false


}


module "cloudfront_distribution" {
  source             = "../../modules/cdn"
  domain_name        = var.domain_name
  aws_region         = var.aws_region
  environment        = var.environment
  ssl_support_method = var.ssl_support_method
  # acm_certificate_arn = data.aws_acm_certificate.ssl-certificates.arn


}

#module "acm" {
#  source = "../../modules/acm"
#  domain_name = var.domain_name
#  availability_zones = { for az in var.avail_az : az => az }
#}



# module "vpc" {
#   source          = "../../modules/networking"
#   cidr_block      = var.cidr_block
#   environment     = var.environment
#   private-subnets = var.private-subnets
#   public-subnets  = var.public-subnets
#   avail_az        = var.avail_az

# }


# module "ec2" {
#   source                 = "../../modules/ec2"
#   subnet_id              = element(module.vpc.public_subnet_ids, 0)
#   instance_type          = var.instance_type
#   vpc_security_group_ids = [module.vpc.security_groups_id[0], module.vpc.security_groups_id[1]]
#   availability_zone      = element(var.avail_az, 0)
#   key_name               = module.ec2.key_pairs
#   root_block_device      = var.root_block_device
#   environment            = var.environment
#   domain_name            = var.domain_name
#   aws_eip                = module.ec2.static_ip

# }

