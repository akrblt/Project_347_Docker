#!/bin/sh
OUT=${1:-./backups}
mkdir -p "$OUT"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
docker-compose exec -T db mysqldump -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" > "$OUT/backup-$TIMESTAMP.sql"
echo "Backup written to $OUT/backup-$TIMESTAMP.sql"
