import React from "react"
import { Link } from 'gatsby'
import '../pages/style.css'

const PostLink = ({ post }) => (
    <div>
        <Link to={'blog'+post.frontmatter.slug} className='post-link'>
            <div className='post-link'>
                {post.frontmatter.title} <br /> <span className='post-date'>{post.frontmatter.date}</span>
            </div>
        </Link>
    </div>
)

export default PostLink