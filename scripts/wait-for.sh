#!/bin/sh
hostport="$1"
timeout=${2:-30}
IFS=':' read host port <<EOF
$hostport
EOF

n=0
while ! nc -z "$host" "$port"; do
  n=$((n+1))
  if [ "$n" -ge "$timeout" ]; then
    echo "Timeout waiting for $host:$port"
    exit 1
  fi
  sleep 1
done
