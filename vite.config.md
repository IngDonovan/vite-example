
-----

import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({command, mode}) => {
	// command es el comando con el que se esta ejecutando en npm run "build"
  // mode es el modo que esta ejecutando ["development", "production"]
  // Estas variables están relacioandas con los scripts de package.json que vimos ["dev", "build"]

	const env = loadEnv(mode, process.cwd())

	if(mode === 'development') // Ejecuto algo
  else // ejecuto otra cosa

  return {
    server: {
      port: env.VITE_PORT
    }
  }
})