module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: '@babel/eslint-parser',
  extends: ["airbnb", 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './jsconfig.json',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".ts", ".d.ts", ".jsx", ".scss"]
      }
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/no-array-index-key': 'off',
    'lines-around-comment': [
      'error',
      {
        beforeLineComment: true,
        beforeBlockComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }
    ],

    "no-shadow": "off",
    'newline-before-return': 'error',

    // add new line below import
    'import/newline-after-import': [
      'error',
      {
        count: 1
      }
    ],

    // add new line after each var, const, let declaration
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: ['export'], next: ['*']},
      {blankLine: 'always', prev: ['*'], next: ['multiline-const', 'multiline-let', 'multiline-var', 'export']}
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ]
  }
}
