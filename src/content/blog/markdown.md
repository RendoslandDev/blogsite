---
date: 2012-03-16

title: Organizing Markdown files

tags:
  - markdown
  - organization
  - productivity

share:
  image: https://astro-big-doc.netlify.app/assets/main/astro-markdown-render-small.png
  title: How you can organise your markdown file with extention '.md'
  description: >
    Your local Markdown files can be kept anywhere within your src/ directory. Local Markdown can be imported into .astro components using an import statement for a single file and Vite’s import.meta.glob() to query multiple files at once.
    If you have groups of related Markdown files, consider defining them as collections. This gives you several advantages, including the ability to store Markdown files anywhere on your filesystem or remotely.
    Collections also allow you to use content-specfic, optimized API for querying and rendering your content. Collections are intended for sets of data that share the same structure, such as blog posts or product items. When you define that shape in a schema, you additionally get validation, type safety, and Intellisense in your editor.
---

![astro markdown render](https://astro-big-doc.netlify.app/assets/main/astro-markdown-render-small.png)
