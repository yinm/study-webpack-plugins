const MyClassBasedWebpackPlugin = require("./plugins/MyClassBasedWebpackPlugin");
const MyFunctionalWebpackPlugin = require("./plugins/MyFunctionalWebpackPlugin");

module.exports = {
  mode: "production",
  plugins: [new MyClassBasedWebpackPlugin(), MyFunctionalWebpackPlugin]
};
