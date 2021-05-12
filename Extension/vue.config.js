module.exports = {
    publicPath: '',
    // devServer: { https: true },
    css: {
        loaderOptions: {
            sass: {
                // scss that are used inside components goes here
                prependData: `@import "@/styles/_variables"; @import "@/styles/_mixins";`
            }
        }
    }
}
