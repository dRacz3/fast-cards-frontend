set -eux
npm run build
ssh pi "mkdir -p ~/temp/dist/"
scp -r dist/* pi:~/temp/dist/
ssh pi 'rm -rf /var/www/html/*; cp -r ~/temp/dist/* /var/www/html/'