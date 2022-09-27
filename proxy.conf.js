const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://ipc5x3db.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;