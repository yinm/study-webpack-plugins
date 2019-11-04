class MyClassBasedWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("MyClassBasedWebpackPlugin", stats => {
      console.log("in MyClassBasedWebpackPlugin");
    });
  }
}

module.exports = MyClassBasedWebpackPlugin;
