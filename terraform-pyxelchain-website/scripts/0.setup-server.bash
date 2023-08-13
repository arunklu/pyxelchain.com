#!/bin/bash

# https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu
sudo apt install -y git
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install -y docker-ce
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
pwd
sudo usermod -aG docker ubuntu
curl -s https://deb.nodesource.com/setup_16.x | sudo bash
sudo apt install nodejs -y
