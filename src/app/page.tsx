import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

async function getSinglePost() {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa&fields.slug=The-History-and-Evolution-of-Ferrari`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getSinglePost();
  const data = post?.items[0]?.fields;

  console.log(slug)

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/lamborghini-1920x1080-16493.jpg"
          alt="Lamborghini"
          className="object-cover object-bottom"
          fill
        />
        <div className="absolute bottom-5 left-5 max-w-lg">
          <p className="text-left text-4xl font-semibold text-gray-400">
            <span className="block">Car /kär/</span>
            <span className="text-2xl">
              A sense of freedom, identity, exploration.
            </span>
          </p>
          <p className="mt-4 text-gray-100">
            Welcome to our car blog, where we bring together a passion for
            driving and a love for all things automotive. Whether you’re a
            die-hard car enthusiast or someone who just wants to get from
            point A to point B, we’re here to make your journey more enjoyable.
          </p>
        </div>
      </div>

      {/* Blog Tags */}
      {/* <div className="px-5 mt-8">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-300">
          Blog Tags
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {[
            "Sports Cars",
            "SUV",
            "JDM",
            "Offroad Cars",
            "Hatchback",
            "Minivan",
            "Sedan",
            "Coupe",
          ].map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-gray-700 px-4 py-2 hover:bg-gray-700"
            >
              <Link href={`/blogs?tag=${tag.toLowerCase()}`} className="text-sm">
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Featured Post */}
      <div className="px-5 mt-8">
        <h2 className="text-2xl font-bold text-gray-300">Featured Post</h2>
        {data ? (
          <div className="mt-4 p-5 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">{data.title}</h3>
            <p className="text-gray-400">By {data.author}</p>
            <div className="mt-4">
              {documentToReactComponents(data.shortDescription, {
                renderNode: {
                  [BLOCKS.PARAGRAPH]: (node, children) => (
                    <p className="text-gray-300">{children}</p>
                  ),
                  [BLOCKS.HEADING_1]: (node, children) => (
                    <h1 className="text-xl text-red-500">{children}</h1>
                  ),
                },
              })}
            </div>
            <Link
              href={`/blogs/${data.slug}`}
              className="mt-4 inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-500"
            >
              Read More
            </Link>
          </div>
        ) : (
          <p className="mt-4 text-gray-400">Loading featured post...</p>
        )}
      </div>
    </div>
  );
}
