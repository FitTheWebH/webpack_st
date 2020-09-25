const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target:
        process.env.NODE_ENV === "development"
          ? "http://localhost:7000"
          : "실제 서버 아이피",
      changeOrigin: true,
    })
  );
};
