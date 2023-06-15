/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  ignorePatterns: ["src/components/Forms/FormRenderer.vue"], // Exclude FormRenderer.vue from linting
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: [
    'src/components/Forms/FormRenderer.vue',
    // Add other file paths you want to exclude
  ]
}
