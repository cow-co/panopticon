module.exports = {
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
