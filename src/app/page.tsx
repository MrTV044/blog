import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

async function getSinglePost() {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa&fields.slug=The-History-and-Evolution-of-Ferrari`,
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
  const data = post.items[0].fields;
  console.log(slug);
  console.log(post);
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative h-[500px] w-full">
          <Image
            src={
              "https://4kwallpapers.com/images/wallpapers/lamborghini-1920x1080-16493.jpg"
            }
            alt="lamborghini"
            className="object-cover object-bottom"
            fill
            // width={1920}
            // height={100}
          ></Image>
          <div className="justify-items-left absolute bottom-2 grid gap-4 p-5">
            <p className="text-left text-4xl text-gray-400">
              <span className="text-4xl font-semibold">Car /kär/</span> <br />
              <span>A sense of freedom, </span> <br />
              <span>identity, exploration.</span>
            </p>

            <p className="max-w-xl text-left text-lg text-gray-100">
              Welcome to our car blog, where we bring together a passion for
              driving and a love for all things automotive. Whether you’re a
              die-hard car enthusiast or someone who just wants to get from
              point A to point B, we’re here to make your journey more
              enjoyable.
            </p>
          </div>
        </div>

        {/* categories */}

        <h2 className="mx-auto mb-5 mt-5 w-fit text-2xl">Blog Tags</h2>
        <div className="mt-5">
          <ul className="categories flex justify-center gap-5">
            <li>
              <Link href="">Sports Cars</Link>
            </li>
            <li>
              <Link href="">SUV</Link>
            </li>
            <li>
              <Link href="">JDM</Link>
            </li>
            <li>
              <Link href="">Offroad Cars</Link>
            </li>
            <li>
              <Link href="">Hatchback</Link>
            </li>
            <li>
              <Link href="">Minivan</Link>
            </li>
            <li>
              <Link href="">Sedan</Link>
            </li>
            <li>
              <Link href="">Coupe</Link>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="mb-2 ml-5 text-2xl">Featured Post</h2>
      <section className="ml-5">
        <section>
          <p>{data.title}</p>
          <p>{data.author}</p>

          {documentToReactComponents(data.shortDescription, {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p className="text-white">{children}</p>;
              },

              [BLOCKS.HEADING_1]: (node, children) => {
                return <p className="text-red-600">{children}</p>;
              },
            },
          })}
          <Link href={`/blogs/${data.slug}`}> Read more </Link>
        </section>
      </section>
    </>
  );
}
