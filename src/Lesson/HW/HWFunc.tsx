import { useEffect, useState } from "react";

type Props = {};

const URL = "https://studapi.teachmeskills.by/blog/posts/3/";

export const HWFunc = ({}: Props) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data: any) => setPosts(data));
  }, []);

  console.log("🚀 ~ file: HWFunc.tsx:9 ~ CounterFunction ~ posts:", posts);
  return <div></div>;
};
