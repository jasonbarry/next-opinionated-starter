
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

module.exports = withBundleAnalyzer({
  // hot module replacement cache (dev only)
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 1000 * 60 * 10, // 10 minutes
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },

  // webpack bundle analyzer
  analyzeServer: false,
  analyzeBrowser: process.env.BUNDLE_ANALYZE === 'browser',
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html'
    }
  },

  assetPrefix: '',
  webpack: (config, { dev, isServer, defaultLoaders }) => {

    return config;
  },
});
