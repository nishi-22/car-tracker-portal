#!/usr/bin/env bash

gcloud config set project car-tracker-portal
gsutil cp app.yaml gs://car-tracker-portal-bucket
gsutil cp -r dist  gs://car-tracker-portal-bucket

