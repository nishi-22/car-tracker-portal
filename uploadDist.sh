#!/usr/bin/env bash

gsutil cp app.yaml gs://car-tracker-portal-bucket
gsutil cp -r dist  gs://car-tracker-portal-bucket

