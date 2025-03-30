//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'



export default [
  ...tanstackConfig,
  ...pluginQuery.configs['flat/recommended'],
  {
    rules: {
      'import/newline-after-import': ['error', { count: 3 }],
    },
  },
]
