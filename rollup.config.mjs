import dts from "rollup-plugin-dts";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

const DIST_PATH = "./dist";

/**
 * @type {import ("rollup").RollupOptions}
 */

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: `${DIST_PATH}/index.cjs.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `${DIST_PATH}/index.esm.js`,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      peerDepsExternalPlugin(),
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
      commonjs(),
      terser(),
    ],
  },
  {
    input: `${DIST_PATH}/types/index.d.ts`,
    output: [
      {
        file: `${DIST_PATH}/index.d.ts`,
        format: "esm",
      },
    ],
    plugins: [dts()],
  },
];
