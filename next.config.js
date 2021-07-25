module.exports = {
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'unsafe-eval' https: 'self' 'unsafe-inline'",
            },
          ],
        },
      ]
    },
  }
  