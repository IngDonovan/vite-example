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
  else {
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
			}
  })