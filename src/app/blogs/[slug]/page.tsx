// import Image from "next/image";
// import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa",
    );
    const data = await res.json();
    return data.items.map((el: { fields: { slug: string } }) => {
      return {
        slug: el.fields.slug,
      };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getSinglePost(slug: string) {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa&fields.slug=${slug}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function DynamicslugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getSinglePost(slug);
  const data = post.items[0].fields;

  console.log(slug);
  console.log(post);
  return (
    <section className="ml-10 mr-10 mt-10">
      <h2 className="text-3xl">{data.title}</h2>
      <p className="mb-5 text-lg">{data.author}</p>
      {documentToReactComponents(data.content, {
        renderNode: {
          [BLOCKS.HEADING_4]: (node, childern) => {
            return <h2 className="text-xl text-red-500">{childern}</h2>;
          },
          [BLOCKS.PARAGRAPH]: (node, children) => {
            return (
              <p className="mb-3 font-semibold text-gray-200">{children}</p>
            );
          },
          [BLOCKS.UL_LIST]: (node, children) => {
            return <ul className="list-disc pl-7">{children}</ul>;
          },
        },
      })}
    </section>
  );
}
