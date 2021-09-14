import test from 'ava';

import { generateSecret } from "jose/util/generate_secret";

test('it works in .ts', async t => {
  t.is(typeof generateSecret, 'function');
  await generateSecret('HS256');
});
