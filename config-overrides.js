const path = require("path");
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "~": path.resolve(__dirname, "src")
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "lib",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1D1D1D" }
  })
);
