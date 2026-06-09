const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    { name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } },
    { name: "categories", title: "Categories", type: "array", of: [{ type: "reference", to: [{ type: "category" }] }] },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] },
  ],
};
export default postSchema;
