import React from "react"
import Container from "../components/container"
import Header from "../components/header"
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
    <Container style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <p>Such wow. Very React.</p>
      <p>CSS Modules are cool.</p>
      {users.map(user => (
        <User key={user.username} {...user} />
      ))}
    </Container>
  )
}
