import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelitPlugin from 'vite-plugin-stylelint';
import { resolve } from "path";

// 路径查找
const pathResolve = (dir: string): string => {
	return resolve(__dirname, ".", dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(),stylelitPlugin()],
  server: {
    host: 'localhost',
    port: 8080,
    open: true
  },
  resolve: {   //暂时没用到
			alias:  {
      "@": pathResolve("src"), 
      }
	},
});
