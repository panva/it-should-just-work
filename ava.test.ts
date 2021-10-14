import test from 'ava';

import { generateSecret } from "jose";

test('it works in .ts', async t => {
  t.is(typeof generateSecret, 'function');
  await generateSecret('HS256');
});
