import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import '../../pages/style.css'

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let post = data.markdownRemark
  let featuredImg = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

  return (
    <div className='blog-post-container'>
      <div>
        <h1 className='blog-post-title'>{frontmatter.title}</h1>
        <h2 className='blog-post-date'>{frontmatter.date}</h2>
        <hr />
        <GatsbyImage image={featuredImg} />
        <div className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`