#!/bin/sh
curl -f http://localhost:5000/health || exit 1
