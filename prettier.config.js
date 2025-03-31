//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles.css',
  tailwindFunctions: ['tw', 'clsx', 'cn', 'cva'],

  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  bracketSameLine: false,
  experimentalOperatorPosition: 'start',
  printWidth: 100,
  singleAttributePerLine: false,
  /* eslintIntegration: true, */
}

export default config
