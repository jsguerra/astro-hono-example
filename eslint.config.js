import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['*.astro', '*.tsx', '*.ts'],
    processor: "astro/client-side-ts",
  },
];
