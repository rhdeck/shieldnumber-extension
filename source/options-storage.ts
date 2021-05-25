import OptionsSync from "webext-options-sync";
const options = new OptionsSync({
	defaults: {
		accountName: "",
		numbers: "[]",
		uploadKey: "",
		uploadUrl: "",
	},
	migrations: [OptionsSync.migrations.removeUnused],
});
export default options;
