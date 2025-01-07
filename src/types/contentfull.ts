import { Document } from "@contentful/rich-text-types";

export interface ContentfulPost {
  fields: {
    title: string;
    name: string;
    slug: string;
    author: string;
    content: Document;
    shortDescription: Document;
    post: { fields: { title: string } };
    categories: { fields: { name: string; slug: string } };
    featuredImage: {
      sys: {
        id: string;
      };
    };
  };
}

export interface ContentfulCategory {
  fields: {
    description: string;
    name: string;
    slug: string;
  };
}
