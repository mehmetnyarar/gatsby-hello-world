import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Pandas({ data }) {
  return (
    <Layout>
      <Header headerText={data.site.siteMetadata.pandasTitle} />
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        pandasTitle
      }
    }
  }
`
