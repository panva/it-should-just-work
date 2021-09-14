```sh
git clone https://github.com/panva/it-should-just-work.git
cd it-should-just-work
npm install
npm run test-ts-node && \
  npm run test-typescript && \
  npm run test-ava && \
  npm run test-webpack && \
  npm run test-rollup && \
  npm run test-esbuild-browser && \
  npm run test-esbuild-node && \
  npm run test-jest
```
