import React from "react"
import { Link } from "gatsby"
import { Box } from "grommet"

import { rhythm, scale } from "../utils/typography"

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    // background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    // elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
)

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            // ...scale(1.5),
            // marginBottom: rhythm(1.5),
            marginTop: 0,
            marginBottom: 0,
            color: "#7d4cdb",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            // fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            color: "#7d4cdb",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {/* <header>{header}</header> */}
        <AppBar>{header}</AppBar>
        <main>{children}</main>
        <footer style={{ marginTop: "60px", fontSize: "0.75em" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
