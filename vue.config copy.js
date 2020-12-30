// vue.config.js
/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

/** @type {Options} */
const config = {
  chainWebpack: config => {
    config.module
      .rule("less")
      .oneOf("normal")
      // .oneOf("normal-modules")
      .use("css-modules-typescript-loader")
      .loader("css-modules-typescript-loader")
      .options({
        mode: process.env.CI ? "verify" : "emit"
      })
      .end();
  }
};

module.exports = config;
