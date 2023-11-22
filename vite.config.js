// import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => ({
	// base: "/Captions-AI/",
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

	/* 	resolve: {
		alias: {
			// "~gerillass": path.resolve(__dirname, "node_modules/gerillass/scss/gerillass.scss"),
			// "@" -> "/User/project-root/src/views"
    		//   '@': path.join(__dirname, 'src/views'),
		},
	}, */
	plugins: [],
}));
