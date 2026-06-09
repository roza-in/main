const caseStudySchema = {
  name: "case-study",
  title: "Case Study",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "clientName", title: "Client Name", type: "string" },
    { name: "industry", title: "Industry", type: "string" },
    { name: "summary", title: "Summary", type: "text" },
    { name: "challenge", title: "Challenge", type: "text" },
    { name: "solution", title: "Solution", type: "text" },
    { name: "results", title: "Results", type: "text" },
    { name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } },
    { name: "publishedAt", title: "Published At", type: "datetime" },
  ],
};
export default caseStudySchema;
