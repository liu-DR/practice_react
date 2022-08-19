

module.exports = {
    //preset选项，用于指定当前工程环境的babel编译器
    presets: ['@babel/preset-env', "@babel/preset-react",'@babel/preset-typescript'],
    // plugins这个选项，用于配合预设来编译一些特殊的js语法
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-syntax-dynamic-import"],
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ]
}