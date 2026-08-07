#!/bin/bash
# Evadynamo SPA server launcher
cd /home/ubuntu/evadynamo-landing || exit 1
exec python3 /home/ubuntu/evadynamo-landing/spa_server.py
