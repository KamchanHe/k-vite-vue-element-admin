module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/html',
    'stylelint-config-html/vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order'
  ],
  overrides: [
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.(scss|css)'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    'selector-class-pattern': '^([a-z][a-z0-9]*)((-|__)[a-z0-9]+)*$',
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }]
  }
};
