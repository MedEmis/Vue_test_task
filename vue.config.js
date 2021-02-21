module.exports = {
	//global import of scss variables to each component 
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/styles/_variables.scss";`
			}
		}
	}
};