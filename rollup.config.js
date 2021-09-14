import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.ts',
  plugins: [nodeResolve({ browser: true })]
};
