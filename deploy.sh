# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'router mode history -> hash'

git push -f https://github.com/kianpas/kianpas.github.io.git master:gh-pages

cd ..