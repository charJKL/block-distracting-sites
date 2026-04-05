import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules';

// Docs: https://rsbuild.rs/config/
export default defineConfig(
{
	plugins: [pluginReact(), pluginSass(), pluginTypedCSSModules()],
	source:
	{
		entry:
		{
			backend: 
			{
				import: "./src/backend/index.ts",
				filename: "backend.js",
				html: false
			},
			frontend: 
			{
				import: "./src/frontend/index.tsx"
			}
		}
	},
	output:
	{
		cleanDistPath: true,
		distPath: "./build",
		copy:
		[
			{ from: "./src/manifest.json" },
			{ from: "./src/icon/BlockDistractingSitesIcon*.png", to: "./icons/[name][ext]" }
		],
	}
});
