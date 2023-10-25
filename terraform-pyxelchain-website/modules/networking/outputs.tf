output "security_groups_id" {
  value = [aws_security_group.ssh-access.id, aws_security_group.web-access.id]
}


output "vpc-id" {
  description = "The ID of the VPC"
  value       = aws_vpc.main-vpc.id

}

output "public_subnet_ids" {
  value = aws_subnet.public-subnets[*].id
}







