import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../../components/layout"
import { rhythm } from "../../utils/typography"

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      {posts.map(({ node }, index) => (
        <article
          key={String(index)}
          css={
            index < posts.length - 1
              ? css`
                  border-bottom: 1px solid gray;
                  margin-bottom: ${rhythm(1 / 2)};
                `
              : undefined
          }
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: baseline;
            `}
          >
            <h2>{node.frontmatter.title}</h2>
            <span
              css={css`
                color: grey;
                font-size: smaller;
              `}
            >
              {node.frontmatter.date}
            </span>
          </div>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
