#!/bin/bash
cd $HOME && mkdir frontend && cd frontend && git clone -b main https://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@github.com/Pyxelchain/pyxelchain.com.git
cd $HOME/frontend/pyxelchain.com && cp -r DevOps/* . && cp env_latest.txt .env && sudo cp env_latest.txt .env && node --version && npm --version && npm i --legacy-peer-deps && npm run build && sed -i 's/pyxelchain.com-stg.gameficap.com/'$1'/g' docker-compose.yml && docker-compose up -d 