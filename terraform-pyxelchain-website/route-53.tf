# resource "aws_route53_zone" "main" {
#   name = "gameficap.com"
# }

resource "aws_route53_zone" "pyxis-tf-dns" {
  name = "pyxistf.com" 
}

resource "aws_route53_record" "pyxis-website-route" {
  zone_id = aws_route53_zone.pyxis-tf-dns.zone_id
  name    = "${var.pyxelchain-domain}"
  type    = "A"
  ttl     = 300
  records = [aws_eip.instance_ip.public_ip]
}
