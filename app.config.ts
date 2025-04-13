import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	tsr: {
		appDirectory: 'src',
	},
	server: {
		preset: 'node-server',
		routeRules: {
			'/**': {
				headers: {
					'Content-Security-Policy':
						"default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self' *; img-src 'self' data:;",
				},
			},
		},
	},
	vite: {
		plugins: [
			tsConfigPaths({
				projects: ['./tsconfig.json'],
			}),
		],
	},
});
