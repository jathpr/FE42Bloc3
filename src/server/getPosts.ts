const DOMAIN = "https://studapi.teachmeskills.by";
const POSTS = "/blog/posts";

export const getPosts = async (limit?: number) => {
  const postsUrl = new URL(DOMAIN + POSTS);
  if (limit) postsUrl.searchParams.set("limit", String(limit));
  const request = await fetch(postsUrl);
  console.log("🚀 ~ file: getPosts.ts:8 ~ getPosts ~ request:", request);
};
