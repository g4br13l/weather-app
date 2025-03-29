//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'



export default [
  ...tanstackConfig,
  {
    rules: {
      'import/newline-after-import': ['error', { count: 3 }],
    },
  },
]
