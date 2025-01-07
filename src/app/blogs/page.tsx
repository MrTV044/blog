import { HomePage } from "@/types/contentfull";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { BLOCKS } from "@contentful/rich-text-types";
// import { RenderingMode } from "next/dist/build/rendering-mode";
import Link from "next/link";

async function getPost() {
  try {
    const res = await fetch(
      "https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa",
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
        (asset) => asset.sys.id === item.fields.featuredImage.sys.id,
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
    <section className="ml-10 mr-10 grid grid-cols-3 gap-10">
      {posts!.map((el) => (
        <Link href={`/blogs/${el.slug}`} key={el.slug}>
          <article key={el.slug}>
            <div className="relative h-32 w-full">
              <Image
                src={el.featuredImage}
                alt="Featured Image"
                fill
                className="object-cover"
              ></Image>
            </div>
            <h2 className="mt-5">{el.title}</h2>
            <h2>Written by: {el.author}</h2>
            {documentToReactComponents(el.shortDescription, {
              renderNode: {
                [BLOCKS.HEADING_4]: (node, childern) => {
                  return <h2 className="text-xl text-red-500">{childern}</h2>;
                },
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return <p className="text-gray-200">{children}</p>;
                },
              },
            })}
            <Link href={`/blogs/${el.slug}`} className="mb-10 text-red-500">
              {" "}
              Read more{" "}
            </Link>
          </article>
        </Link>
      ))}
    </section>
  );
}
