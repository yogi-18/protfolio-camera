module.exports = {
	globDirectory: 'asset/',
	globPatterns: [
		'**/*.{jpg,html,js}'
	],
	swDest: 'asset/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};