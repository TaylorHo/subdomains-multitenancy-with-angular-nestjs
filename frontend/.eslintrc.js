module.exports = {
  root: true,
  ignorePatterns: ['src/assets/**/*', '*.spec.ts'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
        tsconfigRootDir: __dirname
      },
      extends: [
        'eslint:recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended'
      ],
      plugins: [],
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-useless-escape': 'off',
        '@angular-eslint/component-selector': [
          'error',
          {
            prefix: 'app',
            style: 'kebab-case',
            type: 'element'
          }
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            prefix: 'app',
            style: 'camelCase',
            type: 'attribute'
          }
        ],
        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            allowSeparatedGroups: false
          }
        ]
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    }
  ],
  env: {
    es6: true
  }
};
