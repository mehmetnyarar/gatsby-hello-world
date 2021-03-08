import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { User } from "../components/user"

const users = [
  {
    username: "Maria Randall",
    avatar:
      "https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg",
    excerpt:
      "I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    username: "Daniela Dewitt",
    avatar:
      "https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg",
    excerpt:
      "I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
]

export default function About() {
  return (
    <Layout>
      <Header headerText="About me" />
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
      <hr />
      {users.map(user => (
        <User key={user.username} {...user} />
      ))}
    </Layout>
  )
}
