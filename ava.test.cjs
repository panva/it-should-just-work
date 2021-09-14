const test = require('ava');

const { generateSecret } = require("jose/util/generate_secret");

test('it works in .cjs', async t => {
  t.is(typeof generateSecret, 'function');
  await generateSecret('HS256');
});
