module.exports = {
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: 'default-src https: \'unsafe-eval\' \'unsafe-inline\'; object-src \'none\'',
            },
          ],
        },
      ]
    },
  }
  