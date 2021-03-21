import React, { useMemo } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as styles from "./layout.module.css"

const links = [
  { to: "/", title: "Home" },
  { to: "/pandas", title: "Pandas" },
  { to: "/about", title: "About Me" },
  { to: "/contact", title: "Contact" },
]

const NavLink = ({ to, children }) => (
  <li className={styles.navLink}>
    <Link to={to}>{children}</Link>
  </li>
)

const Nav = () => (
  <ul className={styles.nav}>
    {links.map(({ to, title }) => (
      <NavLink key={to} to={to}>
        {title}
      </NavLink>
    ))}
  </ul>
)
export default function Layout({ children }) {
  const copy = useMemo(() => new Date().getFullYear(), [])
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          <h3 className={styles.homeLinkHeader}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Nav />
      </header>
      {children}
      <footer className={styles.footer}>
        &copy;{copy} Mehmet NY. Some rights reserved.
      </footer>
    </div>
  )
}
