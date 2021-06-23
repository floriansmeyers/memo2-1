const { override, fixBabelImports, addLessLoader, babelInclude } = require('customize-cra');

const setOptimizationSideEffect = flag => (config) => {
    config.optimization.sideEffects = flag;
    return config;
};

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@primary-color": "#2297F8",
            "@font-family": "'Montserrat', sans-serif",
        }
    }),

    setOptimizationSideEffect(false)
);
