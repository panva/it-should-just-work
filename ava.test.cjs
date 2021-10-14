const test = require('ava');

const { generateSecret } = require("jose");

test('it works in .cjs', async t => {
  t.is(typeof generateSecret, 'function');
  await generateSecret('HS256');
});
