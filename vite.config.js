import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      '@': path.resolve(__dirname,'./src')
    },
  },
  hostname: 'localhost',
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  // 反向代理
  proxy: {
    '/api': {
      target: 'https://mock.apifox.cn/m1/1344760-0-default',
      changeOrigin: true,
      // rewrite: path => path.replace(/^\/api/, '/api')
    }
  },
  css: {
		//css预处理
		preprocessorOptions: {
			scss: {
				/*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
				additionalData: '@import "@/assets/scss/index.scss";'
			}
		}
	}
})
