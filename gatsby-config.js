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
                        resolve: 'gatsby-source-graphql',
                        options: {
                                typeName: 'GitHub',
                                fieldName: 'github',
                                url: 'https://api.github.com/graphql',
                                headers: {
                                        Authorization: `bearer b4b0b5398f7a73d0534a1212fb6e36cbcb0c792b`,
                                },
                                fetchOptions: {},
                        },
                },
                {
                        resolve: `gatsby-source-contentful`,
                        options: {
                                spaceId: `a35maxjtku05`,
                                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                        },
                },

        ],
}
