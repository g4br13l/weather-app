//  @ts-check
import { tanstackConfig } from '@tanstack/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'
import reactCompiler from 'eslint-plugin-react-compiler'
import react from 'eslint-plugin-react'



export default [
  ...tanstackConfig,
  ...pluginRouter.configs['flat/recommended'],
  ...pluginQuery.configs['flat/recommended'],
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactCompiler.configs.recommended,
  {
    rules: {
      'react-compiler/react-compiler': 'warn',
      'import/newline-after-import': ['warn', { count: 3 }],
      'no-multiple-empty-lines': ['warn', { max: 3, maxEOF: 1, maxBOF: 3 }],
    }
  }
]
