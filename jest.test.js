const { generateSecret } = require("jose");

test('it works in .js', async () => {
  expect(typeof generateSecret).toBe('function');
  expect(await generateSecret('HS256')).toBeTruthy();
});
