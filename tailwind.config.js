/** @type {import('tailwindcss').Config} */
export default {
	content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#f8f7fc",
				secondary: {
					dark: {
						100: "#4c4c4c",
						200: "#262626",
						300: "#000000",
					},
					light: {
						100: "#1f72b4",
						200: "#195a8e",
						300: "#0c2a42",
						400: "#195a8e",
					},
				},
			},
			backgroundImage: {
				// eslint-disable-next-line prettier/prettier
				wave: "url('../../assets/images/wave.svg')",
				"footer-texture": "url('../../assets/images/wave.svg')",
			},
			gridTemplateColumns: {
				"auto-fit-450": "repeat(auto-fit,minmax(450px,1fr))",
				"auto-fit-350": "repeat(auto-fit,minmax(350px,1fr))",
				"auto-fit-250": "repeat(auto-fit,minmax(250px,1fr))",
				"auto-fit-150": "repeat(auto-fit,minmax(150px,1fr))",
			},
			fontFamily: {
				main: "Nunito",
			},
			fontSize: {
				// override default sizes
				sm: "0.875rem",
				base: "1rem",
				lg: "rfs(1.125rem)",
				xl: "rfs(1.25rem)",
				"2xl": "rfs(1.563rem)",
				"3xl": "rfs(1.875rem)",
				"4xl": "rfs(2.441rem)",
				"5xl": "rfs(3.052rem)",
				"6xl": "rfs(3.052rem)",
				"7xl": "rfs(3.052rem)",
				"8xl": "rfs(3.052rem)",
				"9xl": "rfs(3.052rem)",
				//  2.5rem(40px) @ 22rem(352px) increasing to 3.16rem(50.56px) @ 75rem(1200px)
				"fluid-lg": "clamp(2.5rem, calc(2.5rem + ((1vw - 0.22rem) * 1.2453)), 3.16rem)",
				// 2rem(32px) @ 25rem(400px) increasing to 2.37rem(37.92px) @ 75rem(1200px)
				"fluid-slg": "clamp(2rem, calc(2rem + ((1vw - 0.25rem) * 0.74)), 2.37rem)",
				// 18.01px to 26.39px
				"fluid-sm": "clamp(1.13rem, calc(0.86rem + 1.05vw), 1.65rem)",
			},
			spacing: {
				"main-gap": "4rem",
				"image-gap": "0.3rem",
				"min-card-width": "37rem",
				"vertical-space": "10rem",
				"main-border-radius": "clamp(5px, 2vw, 7px)",
			},
		},
	},
	plugins: [],
};
