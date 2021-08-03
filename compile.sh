rm -rf .next/ out/;
rm *.zip;

mkdir out;

yarn next build;
yarn next export;

cp manifest.json ./out;

mv ./out/_next ./out/next
cd ./out && grep -rli '_next' * | xargs -I@ sed -i '' 's/_next/next/g' @;

zip -r -FS ../daily.zip *;

echo ✨ Compiled Sucessfully 

git add -A