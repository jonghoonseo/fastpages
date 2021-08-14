#!/usr/bin/env bash

echo "@reboot sleep 60 && /usr/local/bin/docker-compose -f /home/jseo/site/docker-compose.yml up -d" \
  | sudo tee -a /etc/crontab
