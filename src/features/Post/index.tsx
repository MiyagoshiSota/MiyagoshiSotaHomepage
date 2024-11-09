import { useEffect, useState } from "react";
import style from "./post.module.css";
import { getDetail } from "../Posts/components/postsLogic";

type Props = {
  id: string;
};

const Post = ({ id }: Props) => {
  const [body, setBody] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    (async () => {
      const post = await getDetail(id);
      setBody(post.content);
      setThumbnail(post.eyecatch.url);
      setTitle(post.title);
      setDay(post.category.createdAt);
    })();
  }, []);

  return (
    <div className={style.post_box}>
      <div className={style.post_innerbox}>
        <h1>{title}</h1>
        <p>{day + "更新"}</p>
        <div className={style.imgbox}>
          <img src={thumbnail} alt="" />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
          className={style.contents}
        />
      </div>
    </div>
  );
};

export default Post;
