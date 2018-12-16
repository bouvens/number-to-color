module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  rules: {
    'arrow-parens': ['warn', 'always'],
    'camelcase': ['error', { properties: 'always' }],
    'comma-dangle': ['warn', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'functions': 'never',
    }],
    'complexity': ['warn', 12],
    'consistent-this': ['warn', 'that'],
    'curly': ['warn', 'all'],
    'func-names': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-multiple-empty-lines': 'warn',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-undefined': 'error',
    'no-void': 'off',
    'object-curly-newline': ['off'],
    'semi': ['warn', 'never'],
    'space-before-function-paren': ['error', 'always'],
  },
}
