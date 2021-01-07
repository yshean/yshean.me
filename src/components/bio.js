/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Box } from "grommet"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <Box
      direction="row"
      align="start"
      // background="neutral-2"
      border={{ size: "medium", style: "double" }}
      style={{ borderColor: "#6fffb0", margin: "1rem 0", alignItems: "center" }}
      pad={{ left: "medium", right: "small", vertical: "medium" }}
    >
      {/* <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      > */}
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ margin: 0, marginBlockEnd: 0 }}>
        Hi I'm <strong>{author}</strong>! I live and work in Kuala Lumpur,
        Malaysia 🇲🇾. I build web and mobile apps, and have lots of ❤️ for React
        and Flutter.
      </p>
      {/* </div> */}
    </Box>
  )
}

export default Bio
