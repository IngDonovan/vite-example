import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path' // Use NodeJS

export default defineConfig(({command, mode}) => {
	
	const env = loadEnv(mode, process.cwd())

	if(mode === 'development') {
			return {
                server: {
                port: env.VITE_PORT
                }
	    }
    }
  <!-- else {
			console.log("Mode production")
			return {
					build: {
						// Configuration de Rollup
						rollupOptions: {
								// Configuration rollup, not vite
								input: {
										main: resolve(__dirname, 'index.html'),
                                        hel: resolve(__dirname, 'help', 'help.html'),
									}
								}
						}
				}
			} -->
	else {
        console.log("modo produccion")
        return {
            build:{
               lib: {
                entry: resolve(_dirname, 'lib', 'main.js'),
                name: 'demo',
                fileName: (format)=>`demo.${format}.js`
               }
            }
        }
    }
  })