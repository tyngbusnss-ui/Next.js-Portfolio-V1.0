// next.config.js
const path = require('path');
const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['three'] = path.resolve(__dirname, 'node_modules', 'three');
    }
    return config;
  },
  images: {
    domains: ['example.com'], // Add your image domains here
  },
});