# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m '23.01.16 반응형 디자인 수정'

git push -f https://github.com/kianpas/kianpas.github.io.git master:gh-pages

cd ..