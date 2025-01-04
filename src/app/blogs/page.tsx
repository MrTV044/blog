import { contentfull } from "@/types/contentfull";
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

function mapblogpost(data: contentfull) {
  const posts = data.items.map((item) => {
    const featuredImage = data.includes.Asset.find(
      (asset) => asset.sys.id === item.fields.featuredImage.sys.id,
    );

    return {
      title: item.fields.title,
      slug: item.fields.slug,
      content: item.fields.content,
      featuredImage: `https:${featuredImage?.fields.file.url}`,
    };
  });

  return posts;
}

export default async function PostsPage() {
  const contentfullData = await getPost();
  const posts = mapblogpost(contentfullData);

  console.log(posts);

  return (
    <section>
      {posts.map((el) => (
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
            <h2>Written by: {el.title}</h2>
            {documentToReactComponents(el.content, {
              renderNode: {
                [BLOCKS.HEADING_2]: (node, childern) => {
                  return <h2 className="text-xl">{childern}</h2>;
                },
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return (
                    <p className="font-semibold text-gray-200">{children}</p>
                  );
                },
              },
            })}
          </article>
        </Link>
      ))}
    </section>
  );
}
