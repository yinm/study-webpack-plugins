function MyFunctionalWebpackPlugin(compiler) {
  compiler.hooks.done.tap("MyFunctionalWebpackPlugin", stats => {
    console.log("in MyFunctionalWebpackPlugin");
  });
}

module.exports = MyFunctionalWebpackPlugin;
