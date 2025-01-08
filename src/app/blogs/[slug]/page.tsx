import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa"
    );
    const data = await res.json();
    return data.items.map((el: { fields: { slug: string } }) => ({
      slug: el.fields.slug,
    }));
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getSinglePost(slug: string) {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa&fields.slug=${slug}`
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

  return (
    <section className="px-6 py-10 md:px-20 lg:px-40 bg-gray-900 text-white">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-red-400">{data.title}</h1>
        <p className="mt-2 text-lg text-gray-400">By {data.author}</p>
      </div>

      {/* Content */}
      <div className="leading-relaxed">
        {documentToReactComponents(data.content, {
          renderNode: {
            [BLOCKS.HEADING_4]: (node, children) => (
              <h2 className="text-2xl text-red-500 mt-6">{children}</h2>
            ),
            [BLOCKS.PARAGRAPH]: (node, children) => (
              <p className="mb-4 text-gray-300">{children}</p>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
              <ul className="mb-4 list-disc list-inside pl-4 text-gray-300">
                {children}
              </ul>
            ),
            [BLOCKS.LIST_ITEM]: (node, children) => (
              <li className="mb-2">{children}</li>
            ),
          },
        })}
      </div>
    </section>
  );
}
