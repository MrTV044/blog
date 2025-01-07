"use client";

import { ContentfulPost } from "@/types/contentfull";
import { getContentfulData } from "@/utils/get-contetful-data";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";






export default function SearchPage() {
  return(
    <Suspense>
      <SearchComponent/>
    </Suspense>
  )
}


function SearchComponent(){
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

  console.log(results);
  // console.log(searchQuery);
  // return <h1>Testing</h1>;
  return (
    <section>
      <h2>RESULT FOR: {searchQuery?.toUpperCase()}</h2>
      <div>
        {results?.map((post, index) => (
          <Link
            href={`/blogs/${post.fields.slug}`}
            key={index}
            className="mb-5"
          >
            <h3>{post.fields.title}</h3>
            <span>{post.fields.categories.fields.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}