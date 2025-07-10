module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm start',
      startServerReadyPattern: 'Ready on',
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        throttling: {
          cpuSlowdownMultiplier: 1,
        },
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Core Web Vitals
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }], // LCP < 2.5s
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        
        // Budgets de performance
        'resource-summary:script:size': ['warn', { maxNumericValue: 170000 }], // JS < 170kb
        'resource-summary:stylesheet:size': ['warn', { maxNumericValue: 60000 }], // CSS < 60kb
        'resource-summary:image:size': ['warn', { maxNumericValue: 500000 }],
        'resource-summary:font:size': ['warn', { maxNumericValue: 100000 }],
        
        // Accessibilité
        'color-contrast': 'error',
        'image-alt': 'error',
        'link-name': 'error',
        'meta-viewport': 'error',
        
        // SEO
        'document-title': 'error',
        'meta-description': 'error',
        'crawlable-anchors': 'error',
        
        // Désactiver certaines règles moins critiques
        'uses-long-cache-ttl': 'off',
        'uses-http2': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};