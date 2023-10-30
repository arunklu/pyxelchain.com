output "key_pairs" {
  value = aws_key_pair.ssh-key.key_name

}

output "ubuntu_latest" {
  value = data.aws_ami.ubuntu_latest.id
}

output "static_ip" {
  value = aws_eip.static_ip.public_ip

}
