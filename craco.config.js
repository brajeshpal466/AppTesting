const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/app/components'),
      '@Styles': path.resolve(__dirname, 'src/app/styles'),
      '@Types': path.resolve(__dirname, 'src/app/types'),
      '@Utils': path.resolve(__dirname, 'src/app/utils'),
    },
  },
};
