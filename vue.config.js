module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "PANOPTICON",
        appId: "panopticon",
        linux: {
          target: [
            "AppImage",
            "deb"
          ],
          publish: [
            "github"
          ]
        },
        win: {
          icon: "public/assets/logo.png",
          target: "NSIS",
          publish: [
            "github"
          ]
        }
      }
    }
  }
};
