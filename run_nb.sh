#!/bin/bash

# Prepare pipenv
pip install pipenv

# Enable virtualenv
pipenv shell

# Install dependencies
pipenv install

# Run Jupyter Notebook
readonly IP="0.0.0.0"
readonly PORT="8123"
jupyter notebook \
    --allow-root \
    --no-browser \
    --ip=${IP} \
    --port=${PORT} \
    --notebook-dir=${PWD}/_notebooks
