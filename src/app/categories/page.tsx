import { ContentfulPost } from "@/types/contentfull";
import { getContentfulData } from "@/utils/get-contetful-data";
import Link from "next/link";

export default async function BlogPage() {
  const posts = (await getContentfulData({
    content_type: "blogCategory",
  })) as unknown as ContentfulPost[];

  console.log(posts);

  return (
    <section className="p-5">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-center mb-5 mt-5 text-4xl font-bold">BLOG POSTS</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts?.map((post, index: number) => (
            <article
              key={index}
              className="rounded-xl border-2 shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <Link
                key={post.fields.slug as string}
                href={`/categories/${post.fields.slug}`}
                className="block p-5 text-xl text-center hover:bg-green-500 hover:text-black transition"
              >
                {post.fields.name}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
