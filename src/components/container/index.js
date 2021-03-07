import React from "react"
import * as styles from "./container.module.css"

export default function Container({ children, style }) {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  )
}
