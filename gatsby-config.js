require('dotenv').config({
        path: `.env.${process.env.NODE_ENV}`,
});

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
                        resolve: `gatsby-source-contentful`,
                        options: {
                                spaceId: `a35maxjtku05`,
                                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                        },
                },

        ],
}
