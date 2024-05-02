async function redirects() {
  return [
    {
      source: "/docs",
      destination: "/docs/introducao",
      permanent: true,
    },
  ];
}

module.exports = redirects;
