import { build, context } from 'esbuild';

const options = {
  entryPoints: ['src/main.jsx'],
  outfile: 'assets/main.js',
  bundle: true,
  minify: true,
  jsx: 'automatic',
  format: 'iife',
  target: ['es2020'],
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'linked',
  banner: { js: '/*! Includes React Bits BlurText, (c) David Haz. License: public/licenses/react-bits.md */' },
  logLevel: 'info',
};

if (process.argv.includes('--serve')) {
  const ctx = await context(options);
  await ctx.watch();
  await ctx.serve({ servedir: '.', host: '127.0.0.1', port: 5173 });
} else {
  await build(options);
}
