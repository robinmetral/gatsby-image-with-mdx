const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // handle errors
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        // create posts pages
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            // slug generated with createNodeField
            path: node.frontmatter.slug,
            // post template
            component: path.resolve(`./src/templates/post.js`),
            // pass id as context
            context: { id: node.id },
          })
        })
      })
    )
  })
}
