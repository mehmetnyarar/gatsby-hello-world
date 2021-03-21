const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Called by Gatsby whenever a new node is created or updated
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    // gatsby-source-filesystem plugin ships with a function for creating slugs
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    // createNodeField allows creating additional fields on nodes created by other plugins
    const { createNodeField } = actions
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query data with GraphQL
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(JSON.stringify(result, null, 2))

  // Map the query results to pages
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables
        slug: node.fields.slug,
      },
    })
  })
}
