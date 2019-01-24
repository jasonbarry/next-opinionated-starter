module.exports = api => {
  api.cache(true)
  return {
    presets: ['next/babel', '@babel/preset-flow'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            API: './src/api',
            Components: './src/components',
            Interfaces: './src/interfaces',
            Utils: './src/utils',
          },
        },
      ],
      'react-html-attrs',
      '@babel/transform-flow-strip-types',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
    ],
  }
}
