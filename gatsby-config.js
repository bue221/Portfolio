module.exports = {
				plugins: [
								{
												resolve: `gatsby-plugin-manifest`,
												options: {
																name: `Andres Plaza`,
																short_name: `Andres C`,
																start_url: `/`,
																background_color: `#f7f0eb`,
																theme_color: `#a2466c`,
																display: `standalone`,
																icon: `src/img/logo.png`, 
												},
								},
								`gatsby-plugin-react-helmet`,
								{
												resolve: 'gatsby-source-graphql',
												options: {
																typeName: 'GitHub',
																fieldName: 'github',
																url: 'https://api.github.com/graphql',
																headers: {
																				Authorization: `bearer ecf6c9721bf59a1f99c6e8198af1d0c5424e2027`,
																},
																fetchOptions: {},
												},
								},

				],
}
