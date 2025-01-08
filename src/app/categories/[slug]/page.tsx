import { ContentfulPost } from "@/types/contentfull";
import Link from "next/link";
import { getContentfulData } from "@/utils/get-contetful-data";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default async function CategoriesSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const posts = (await getContentfulData({
    content_type: "blogpostPurwa",
  })) as unknown as ContentfulPost[];

  const filteredPostsByCategory = posts?.filter(
    (post) => post?.fields.categories?.fields?.slug === slug
  );

  return (
    <div className="bg-black text-white px-4 py-6 sm:px-8">
      <h1 className="mb-6 text-center text-3xl font-semibold">
        Category: {slug}
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPostsByCategory.map((post, index) => (
          <article
            key={index}
            className="flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform hover:scale-105"
          >
            {/* Title and Author */}
            <div className="p-5">
              <Link href={`/blogs/${post.fields.slug}`}>
                <h2 className="mb-2 text-xl font-bold text-red-400 hover:underline">
                  {post.fields.title}
                </h2>
              </Link>
              <p className="text-gray-400">By {post.fields.author}</p>

              {/* Short Description */}
              <div className="mt-4 text-gray-300">
                {documentToReactComponents(post.fields.shortDescription, {
                  renderNode: {
                    [BLOCKS.HEADING_4]: (node, children) => (
                      <h4 className="text-lg text-red-400">{children}</h4>
                    ),
                    [BLOCKS.PARAGRAPH]: (node, children) => (
                      <p className="text-gray-300">{children}</p>
                    ),
                  },
                })}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPostsByCategory.length === 0 && (
        <div className="mt-10 text-center text-gray-500">
          <p>No posts available in this category.</p>
        </div>
      )}
    </div>
  );
}
