import { Document } from "@contentful/rich-text-types";

export interface contentfull {
  items: [
    {
      fields: {
        title: string;
        slug: string;
        author: string;
        content: Document;
        shortDescription: Document;
        featuredImage: {
          sys: {
            id: string;
          };
        };
      };
    },
  ];
  includes: {
    Asset: [{ fields: { file: { url: string } }; sys: { id: string } }];
  };
}
