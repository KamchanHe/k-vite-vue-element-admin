module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  plugins: ['vue', 'html', '@typescript-eslint', 'import', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:vue/vue3-recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    './.eslintrc-auto-import.json',
    'prettier',
    'plugin:prettier/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts', '.vue']
      }
    },
    alias: {
      extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts', '.vue'],
      map: [['@', './src']]
    }
  },
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser'
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // prettier
    'prettier/prettier': [
      'error',
      {
        vueIndentScriptAndStyle: false
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],

    // import
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    // eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],

    // js/ts
    'no-empty': ['error', { allowEmptyCatch: true }],
    'consistent-return': 'off',

    // ts
    '@typescript-eslint/ban-ts-comment': ['off', { 'ts-ignore': false }],
    '@typescript-eslint/no-empty-interface': 'off',

    // vue
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    // best-practice
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false
      }
    ]
  }
};
