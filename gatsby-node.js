const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query GetLevesLang {
      nyelv: allContentfulLevesek{
          nodes {
            lang
          }
        }
    }
  `)
    result.data.nyelv.nodes.forEach(b => {
        createPage({
            path: b.lang === "EN" ? `/en/` : `/`,
            component: path.resolve(`src/templates/index-template.js`),
            context: {
                lang: b.lang,
            },
        })
    })
    result.data.nyelv.nodes.forEach(b => {
        createPage({
            path: b.lang === "EN" ? `/en/contacts` : `/contacts`,
            component: path.resolve(`src/templates/contacts-template.js`),
            context: {
                lang: b.lang,
            },
        })
    })
    result.data.nyelv.nodes.forEach(b => {
        createPage({
            path: b.lang === "EN" ? `/en/galery` : `/galery`,
            component: path.resolve(`src/templates/galery-template.js`),
            context: {
                lang: b.lang,
            },
        })
    })
    result.data.nyelv.nodes.forEach(b => {
        createPage({
            path: b.lang === "EN" ? `/en/lunchmenu` : `/lunchmenu`,
            component: path.resolve(`src/templates/lunch-template.js`),
            context: {
                lang: b.lang,
            },
        })
    })
    result.data.nyelv.nodes.forEach(b => {
        createPage({
            path: b.lang === "EN" ? `/en/menu` : `/menu`,
            component: path.resolve(`src/templates/menu-template.js`),
            context: {
                lang: b.lang,
            },
        })
    })

}
