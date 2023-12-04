terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.18.0"
    }
  }

  backend "s3" {
    bucket = "pyxis-terraform-state-bucket"
    key    = "prod-pyxelchain.com/terraform.tfstate"
    region = "us-east-1"

  }
}
