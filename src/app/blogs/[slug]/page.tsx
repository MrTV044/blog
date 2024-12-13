async function getSinglePost(slug: string) {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa&fields.slug=${slug}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function DynamicslugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getSinglePost(slug);

  console.log(slug);
  console.log(post);
  return (
    <section>
      <h2>{slug}</h2>
    </section>
  );
}
