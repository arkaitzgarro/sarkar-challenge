module.exports = {
  port: 9292,
  host: process.env.HOST || 'localhost',
  upstreamHost: process.env.UPSTREAM_HOST,
};
