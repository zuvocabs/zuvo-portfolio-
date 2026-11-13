#!/usr/bin/env bash
set -e

echo "==> Building production bundle..."
npm run build

echo "==> Deploying to AWS server (52.66.73.27)..."
rsync -avz --delete \
  -e "ssh -i ~/.ssh/zuvo_admin_cd_ci -o StrictHostKeyChecking=no" \
  dist/ ubuntu@52.66.73.27:/var/www/zuvocabs/

echo "==> Setting permissions on server..."
ssh -i ~/.ssh/zuvo_admin_cd_ci -o StrictHostKeyChecking=no ubuntu@52.66.73.27 \
  "sudo chown -R ubuntu:www-data /var/www/zuvocabs && sudo find /var/www/zuvocabs -type d -exec chmod 775 {} + && sudo find /var/www/zuvocabs -type f -exec chmod 664 {} +"

echo "==> Deployment complete! Live at https://zuvocabs.com"
