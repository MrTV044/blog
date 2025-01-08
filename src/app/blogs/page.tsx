import { HomePage } from "@/types/contentfull";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";

async function getPost() {
  try {
    const res = await fetch(
      "https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function mapblogpost(data: HomePage) {
  if (data) {
    const posts = data.items.map((item) => {
      const featuredImage = data.includes.Asset.find(
        (asset) => asset.sys.id === item.fields.featuredImage.sys.id
      );

      return {
        title: item.fields.title,
        slug: item.fields.slug,
        content: item.fields.content,
        author: item.fields.author,
        shortDescription: item.fields.shortDescription,
        featuredImage: `https:${featuredImage?.fields.file.url}`,
      };
    });

    return posts;
  } else {
    console.error("Invalid response structure");
  }
}

export default async function PostsPage() {
  const contentfullData = await getPost();
  const posts = mapblogpost(contentfullData);

  console.log(posts);

  return (
    <section className="bg-black py-10">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-10 text-3xl font-extrabold text-white text-center">
          Featured Blog Posts
        </h1>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts!.map((el) => (
            <Link href={`/blogs/${el.slug}`} key={el.slug}>
              <article className="rounded-lg border border-gray-700 shadow-lg hover:shadow-xl transition hover:-translate-y-1 overflow-hidden bg-gray-900">
                <div className="relative h-48 w-full">
                  <Image
                    src={el.featuredImage}
                    alt={el.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white">{el.title}</h2>
                  <h3 className="mt-2 text-sm text-gray-400">
                    Written by: {el.author}
                  </h3>
                  <div className="mt-4 text-gray-300">
                    {documentToReactComponents(el.shortDescription, {
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
                  <Link
                    href={`/blogs/${el.slug}`}
                    className="mt-5 inline-block text-red-400 hover:text-red-500 text-sm font-semibold"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
