import { graphql } from "gatsby"
import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

const truncate = (text, size = 20) =>
  text.length > size ? `${text.slice(0, size - 3)}` : text

export default function Files({ data }) {
  return (
    <Layout>
      <Header headerText="These are the files" />
      <table>
        <thead>
          <tr>
            <th>Path</th>
            <th>Size</th>
            <th>Extension</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }) => (
            <tr key={node.id}>
              <td>{truncate(node.relativePath)}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
