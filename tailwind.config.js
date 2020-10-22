module.exports = {
  experimental: {
    darkModeVariant: true
  },
  future: {
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
    purgeLayersByDefault: true
  },
  dark: 'class',
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {}
  },
  variants: {
    borderWidth: ({ variants }) => [...variants('borderWidth'), 'dark'],
    borderColor: ({ variants }) => [...variants('borderColor'), 'dark'],
    boxShadow: ({ variants }) => [...variants('boxShadow'), 'dark'],
    display: ({ variants }) => [...variants('display'), 'dark'],
    opacity: ({ variants }) => [
      ...variants('opacity'),
      'group-hover',
      'group-focus',
      'dark'
    ],
    fill: ({ variants }) => [
      ...variants('fill'),
      'group-hover',
      'group-focus',
      'dark'
    ],
    stroke: ({ variants }) => [
      ...variants('stroke'),
      'group-hover',
      'group-focus',
      'dark'
    ]
  },
  plugins: []
}
