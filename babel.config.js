module.exports = api => {
  api.cache(true);
  return {
    presets: ['next/babel', '@babel/preset-flow'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            API: './app/src/api',
            Components: './app/src/components',
            Interfaces: './app/src/interfaces',
            Utils: './app/src/utils',
          },
        },
      ],
      'react-html-attrs',
      '@babel/transform-flow-strip-types',
    ],
  };
};
