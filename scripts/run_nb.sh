#!/usr/bin/env bash

MODE="${1}"

# Prepare pipenv
[[ ${MODE} == "install" && -z $(pip install pipenv) ]] && pip install pipenv

PIPENV="${HOME}/.pyenv/shims/pipenv"

# Enable virtualenv
# NOTE(jseo): `pipenv shell` spawn a new shell. We do the following workaround.
# Which is based on: https://stackoverflow.com/questions/48056606/bash-script-starting-new-shell-and-continuing-to-run-commands#comment117997402_48056606
source "$(${PIPENV} --venv)"/bin/activate

# Install dependencies
[[ ${MODE} == "install" ]] && pipenv install

# To set firewall rules
# See, https://docs.oracle.com/ko/solutions/machine-learning-sandbox/configuring-your-system1.html#GUID-033AC8F2-A698-4415-B526-59221D1AF725
if [[ ${MODE} == "install" &&  -z $(sudo iptables -L INPUT | grep 8467 | grep ACCEPT) ]]; then
  sudo iptables -I INPUT -p tcp -s 0.0.0.0/0 --dport 8467 -j ACCEPT
  sudo service netfilter-persistent save
fi

# Run Jupyter Notebook
jupyter notebook \
  --config "$(dirname $(realpath "${0}"))/../jupyter_notebook_config.py"
