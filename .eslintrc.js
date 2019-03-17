module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
    },
    env: {
        browser: true,
    },
    rules: {
        "arrow-parens": 0,
        "generator-star-spacing": 0,
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        indent: ["error", 4],
        semi: 0,
        "linebreak-style": ["error", "unix"],
        semi: [1, "always"],

        "no-mixed-spaces-and-tabs": "error",
        "comma-dangle": ["error", "always-multiline"],
        "import/no-unresolved": [0, { commonjs: true, amd: true }],
        "react/prop-types": "off",
    },
};
