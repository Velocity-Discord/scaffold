import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import { defineConfig } from "rollup";

export default defineConfig([
    {
        input: "src/index.ts",
        output: {
            file: "dist/index.cjs",
            format: "cjs",
        },
        plugins: [typescript(), nodeResolve(), terser()],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/index.js",
            format: "es",
        },
        plugins: [typescript(), nodeResolve(), terser()],
    },
]);
