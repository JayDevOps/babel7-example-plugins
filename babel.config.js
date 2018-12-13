const presets = [
  ];
const plugins = [
    "@babel/plugin-transform-arrow-functions",
    ["@babel/plugin-proposal-pipeline-operator", {"proposal": "minimal"}]
 ];

module.exports =  {
    presets,
    plugins
};