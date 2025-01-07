import { ContentfulPost } from "@/types/contentfull";
import Link from "next/link";
import { getContentfulData } from "@/utils/get-contetful-data";

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
    (post) => post?.fields.categories?.fields!.slug === slug,
  );

  return (
    <>
      <div>
        {filteredPostsByCategory!.map((post, index: number) => (
          <article
            key={index}
            className="grid grid-cols-1 grid-rows-[300px_1fr] gap-7 sm:h-full sm:grid-cols-[1fr_250px] sm:grid-rows-1"
          >
            <div>
              <Link
                href={`/blogs/${post.fields.slug}`}
                className="mb-4 block text-2xl font-bold"
              >
                {post.fields.title}
                {post.fields.author}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
