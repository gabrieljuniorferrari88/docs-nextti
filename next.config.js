const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: false,
  swcMinify: true,
  redirects: require("./next-redirects"),
  images: {
    domains: ["images.unsplash.com", "pbs.twimg.com", "www.syng.com.br", "lh3.googleusercontent.com", "www.nexttisistemas.com.br"],
  },
});
