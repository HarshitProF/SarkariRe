module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@app': './app',
            '@components': './components',
            '@context': './context',
            '@data': './data',
            '@screens': './screens',
            '@theme': './theme',
            '@utils': './utils'
          }
        }
      ]
    ]
  };
};
