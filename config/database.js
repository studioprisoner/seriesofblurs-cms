module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'tvf4es8akqs0.us-east-3.psdb.cloud'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'seriesofblurs-cms'),
        username: env('DATABASE_USERNAME', 'bph6ijo16qe3'),
        password: env('DATABASE_PASSWORD', 'pscale_pw_PjDCIxcMgoFL46cBlxitTvQA-Gjsx-ROUwgjwAyd7JY'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
