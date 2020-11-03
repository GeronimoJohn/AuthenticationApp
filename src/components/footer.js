import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>Create by {author.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer
