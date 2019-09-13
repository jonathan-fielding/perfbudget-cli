const { execSync } = require('child_process');

test('Check output when using the default fixture', () => {
  const cli = execSync('npx ts-node src/cli.ts', {
    encoding: 'utf-8',
  });

  expect(cli).toContain('hello');
});