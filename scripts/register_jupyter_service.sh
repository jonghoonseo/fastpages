#!/usr/bin/env bash

cat <<EOF | sudo tee /etc/systemd/system/jupyter.service
[Unit]
Description=Jupyter Notebook Server

[Service]
Type=simple
PIDFile=/run/jupyter.pid
User=jseo
ExecStart=/home/jseo/site/scripts/run_nb.sh
WorkingDirectory=/home/jseo/site
Restart=always

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable jupyter.service
sudo systemctl start jupyter.service
