import * as contentful from "contentful";

const client = contentful.createClient({
  space: "tvndgufzufq7",
  accessToken: "SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168",
  environment: "master",
});

export async function getContentfulData({
  content_type,
  query,
}: {
  content_type: string;
  query?: string;
}) {
  try {
    const data = await client.getEntries({
      content_type: content_type,
      query: query,
    });
    return data.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
