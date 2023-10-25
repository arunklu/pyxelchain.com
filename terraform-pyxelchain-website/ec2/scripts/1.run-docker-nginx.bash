#!/bin/bash
cd $HOME && mkdir nginx-proxy && cd nginx-proxy && docker network create nginx-proxy && cp /tmp/docker-compose.yml . && docker-compose up -d