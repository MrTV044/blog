"use client";

import { ContentfulPost } from "@/types/contentfull";
import { getContentfulData } from "@/utils/get-contetful-data";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default function SearchPage() {
  return (
    <Suspense>
      <SearchComponent />
    </Suspense>
  );
}

function SearchComponent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [results, setResults] = useState<ContentfulPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      const results = (await getContentfulData({
        content_type: "blogpostPurwa",
        query: searchQuery!,
      })) as unknown as ContentfulPost[];

      setResults(results);
    }

    fetchData();
  }, [searchQuery]);

  return (
    <section className="px-6 py-10 md:px-20 lg:px-40 bg-gray-900 text-white">
      {/* Search Results Heading */}
      <h2 className="mb-6 text-2xl font-bold text-red-400">
        Results for: <span className="text-gray-100">{searchQuery?.toUpperCase()}</span>
      </h2>

      {/* Results List */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {results?.map((post, index) => (
          <Link
            href={`/blogs/${post.fields.slug}`}
            key={index}
            className="block p-6 rounded-lg bg-gray-800 shadow-md hover:bg-gray-700 transition duration-300"
          >
            {/* Blog Title */}
            <h3 className="mb-4 text-xl font-semibold text-red-400">
              {post.fields.title}
            </h3>

            {/* Category */}
            <span className="block mb-4 text-sm text-gray-500 uppercase">
              {post.fields.categories.fields.name}
            </span>

            {/* Short Description */}
            <div className="text-gray-300">
              {documentToReactComponents(post.fields.shortDescription, {
                renderNode: {
                  [BLOCKS.HEADING_4]: (node, children) => (
                    <h4 className="text-lg text-red-400">{children}</h4>
                  ),
                  [BLOCKS.PARAGRAPH]: (node, children) => (
                    <p className="text-sm text-gray-300">{children}</p>
                  ),
                },
              })}
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {results.length === 0 && (
        <p className="mt-10 text-center text-lg text-gray-400">
          No results found for &quot;<span className="text-gray-300">{searchQuery}</span>&quot;
        </p>
      )}
    </section>
  );
}
