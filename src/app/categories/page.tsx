import { ContentfulPost } from "@/types/contentfull";
import { getContentfulData } from "@/utils/get-contetful-data";
import Link from "next/link";

export default async function BlogPage() {
  const posts = (await getContentfulData({
    content_type: "blogCategory",
  })) as unknown as ContentfulPost[];

  console.log(posts);

  return (
    <section className="">
      <div>
        <h2 className="m-auto mb-5 mt-5 w-fit">BLOG POSTS</h2>
        <div className="m-auto flex w-fit gap-5">
          {posts?.map((post, index: number) => (
            <article
              key={index}
              className="mb-5 block w-fit rounded-xl border-2"
            >
              <Link
                key={post.fields.slug as string}
                href={`/categories/${post.fields.slug}`}
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
