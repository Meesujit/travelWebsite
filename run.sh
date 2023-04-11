#! /bin/sh

cd client

npm run build

cd ..

git add .

DATE=$(date)

git commit -m "Changes made on $DATE"

git push


