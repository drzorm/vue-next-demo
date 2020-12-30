// vue.config.js
/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

function addCssModulesTsLoader(rule) {
  rule
    .use("css-modules-typescript-loader")
    .loader(require.resolve("css-modules-typescript-loader"))
    .options({
      mode: process.env.CI ? "verify" : "emit"
    });
}

/** @type {Options} */
const config = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: "[name]-[hash]"
        },
        localsConvention: "camelCaseOnly"
      }
    }
  },
  chainWebpack: config => {
    const types = ["normal-modules", "normal"];
    types.forEach(type => addCssModulesTsLoader(config.module.rule("css").oneOf(type)));
  }
};

module.exports = config;
