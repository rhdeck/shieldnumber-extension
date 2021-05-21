const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	purge: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	purge: ["./src/**/*.html", "./source/**/*.tsx"],
	variants: {},
	plugins: [
		require("@tailwindcss/ui"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
