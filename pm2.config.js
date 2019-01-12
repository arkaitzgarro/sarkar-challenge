module.exports = {
  apps : [{
    name: 'sarkar',
    script: 'src/index.js',
    instances: -1, // All CPU(s) minus 1
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
