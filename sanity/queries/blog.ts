export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{name, image},
    mainImage,
    categories[]->{title},
    publishedAt,
    excerpt
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author->{name, image, bio},
    mainImage,
    categories[]->{title},
    publishedAt,
    body,
    excerpt
  }
`;

export const caseStudiesQuery = `
  *[_type == "case-study"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    clientName,
    industry,
    summary,
    challenge,
    solution,
    results,
    mainImage,
    publishedAt
  }
`;
export const caseStudyBySlugQuery = `
  *[_type == "case-study" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    clientName,
    industry,
    summary,
    challenge,
    solution,
    results,
    mainImage,
    publishedAt
  }
`;
