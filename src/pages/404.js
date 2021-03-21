import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function NotFoundPage() {
  return (
    <Layout>
      <Header headerText="Ooops!" />
      <p>This page doesn't seem to exist.</p>
    </Layout>
  )
}
