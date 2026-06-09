import post from "@/sanity/schema-types/post";
import author from "@/sanity/schema-types/author";
import category from "@/sanity/schema-types/category";
import caseStudy from "@/sanity/schema-types/case-study";
import job from "@/sanity/schema-types/job";

export const schema = {
  types: [post, author, category, caseStudy, job],
};
