const jobSchema = {
  name: "job",
  title: "Job Opening",
  type: "document",
  fields: [
    { name: "title", title: "Job Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    {
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Engineering", value: "Engineering" },
          { title: "Product & Design", value: "Product & Design" },
          { title: "Sales & Marketing", value: "Sales & Marketing" },
          { title: "Customer Success", value: "Customer Success" },
        ],
      },
    },
    { name: "location", title: "Location", type: "string", initialValue: "Remote (India)" },
    {
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Internship", value: "Internship" },
          { title: "Contract", value: "Contract" },
        ],
      },
      initialValue: "Full-time",
    },
    { name: "description", title: "Job Description", type: "array", of: [{ type: "block" }] },
    { name: "isActive", title: "Is Active", type: "boolean", initialValue: true },
  ],
};
export default jobSchema;
