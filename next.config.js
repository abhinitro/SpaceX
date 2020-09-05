const withCSS = require('@zeit/next-css');



module.exports = withCSS(
  {
    webpack(config, options) {

      config.module.rules.push(
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use:
                {
                  loader: 'url-loader',
                  // include: path.join(__dirname, 'images'),
                  options:
                    {
                      limit: 100000,
                      name: '[name].[ext]',
                      
                    },
                },
        },
      );
      return config;
    },
  },
);
