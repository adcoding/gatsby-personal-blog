# Gatsby Personal Blog

This is a personal blog created with Gatsby, a framework built on top of React.js. This blog is designed to showcase my writing skills and share my thoughts and experiences on various topics.

## Getting Started
To get started with this blog, you need to have Node.js installed on your computer. Once you have Node.js installed, you can follow these steps:

1. Clone the repository: git clone https://github.com/yourusername/gatsby-personal-blog.git
2. Navigate to the project directory: cd gatsby-personal-blog
3. Install dependencies: ```npm install```
4. Start the development server: ```npm run develop```
5. The blog should now be accessible at http://localhost:8000/

## Building for Production

To build the blog for production, run the following command:

```npm run build```

This will generate a public folder containing all the files needed to deploy the blog to a server.

## Adding Blog Posts

To add a new blog post, create a new Markdown file in the content/posts directory. The file should be named in the format ```YYYY-MM-DD-post-title.md```
For example, ```2021-09-01-my-first-post.md```

The Markdown file should start with a frontmatter section that contains metadata about the post, such as the title and date:

```
---
title: My First Post
date: 2021-09-01
---

Your content
```