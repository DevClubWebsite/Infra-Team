import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import jsx from "@babel/plugin-syntax-jsx";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve(),
    babel.babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
      exclude: "node_modules/**",
    }),
    PeerDepsExternalPlugin(),
    jsx(),
    commonjs(),
  ],
};
