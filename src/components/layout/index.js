import React, { useMemo } from "react"
import { Link } from "gatsby"
import * as styles from "./layout.module.css"

const links = [
  { to: "/", title: "Home" },
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
      <NavLink to={to}>{title}</NavLink>
    ))}
  </ul>
)
export default function Layout({ children }) {
  const copy = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          <h3 className={styles.homeLinkHeader}>MySweetSite</h3>
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
