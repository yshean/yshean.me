import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Grommet, Box, Button, Heading } from "grommet"
import { Facebook, Twitter, Linkedin } from "grommet-icons"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const theme = {
  global: {
    font: {
      family: "Nunito",
      size: "18px",
      height: "20px",
    },
  },
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Grommet theme={theme}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          <Bio />
          <Box
            align="end"
            // background="neutral-2"
            pad={{ right: "small", vertical: "small" }}
            direction="row"
            justify="end"
          >
            <Button
              primary
              icon={<Facebook />}
              onClick={() => {
                window.location.href = "https://www.facebook.com/yshean"
              }}
              style={{ borderRadius: "2em", margin: "0 0.2em" }}
            />
            <Button
              primary
              icon={<Twitter />}
              onClick={() => {
                window.location.href = "https://www.twitter.com/shin_chong"
              }}
              style={{ borderRadius: "2em", margin: "0 0.2em" }}
            />
            <Button
              primary
              icon={<Linkedin />}
              onClick={() => {
                window.location.href = "https://www.linkedin.com/in/yshean"
              }}
              style={{ borderRadius: "2em", margin: "0 0.2em" }}
            />
          </Box>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Box
                as="article"
                // border
                border={{ size: "medium", style: "double" }}
                style={{ borderColor: "#FD49A0", margin: "1rem 0" }}
                key={node.fields.slug}
              >
                {/* <div style={{ position: "relative", background: "white" }}>
                  <div className="with-shadow1"> */}
                <Img
                  sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                />
                <div style={{ padding: "0 1rem" }}>
                  <header
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Heading
                      level={2}
                      style={{
                        margin: "0.5rem 0",
                        color: "#fd49a0",
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </Heading>
                    <small
                      style={{
                        backgroundColor: "#6fffb0",
                        height: "min-content",
                        width: "120px",
                        textAlign: "center",
                      }}
                    >
                      {node.frontmatter.date}
                    </small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </div>
                {/* </div>
                </div> */}
              </Box>
            )
          })}
        </Layout>
      </Grommet>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
