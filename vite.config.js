import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => ({
	// base: "/repo-name/",
	// Getting rid of hashes in generated filenames
	filenameHashing: false,
	build: {
		// change output location
		rollupOptions: {
			output: {
				manualChunks: undefined,
				assetFileNames: "assets/[name].[ext]", // Output assets (e.g., images, SVGs) to the assets folder
				entryFileNames: "assets/[name].js", // Output entry files (e.g., JavaScript) to the root directory
				chunkFileNames: "assets/[name].[ext]", // Output dynamic imports (chunks) to the assets folder
			},
		},
	},
	plugins: [],
}));
