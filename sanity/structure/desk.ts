// desk structure builder with only active types
export const deskStructure = (S: any) =>
  S.list()
    .title("Content Manager")
    .items([
      S.documentTypeListItem("post").title("Blog"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("case-study").title("Case Studies"),
      S.documentTypeListItem("job").title("Job Openings"),
    ]);
