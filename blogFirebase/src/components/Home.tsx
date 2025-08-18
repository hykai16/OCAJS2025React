import React, { useEffect, useState } from "react";
import "./styles/Home.scss";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";

type Post = {
  title: string;
  post: string;
  author: {
    username: string;
    id: string;
  };
  createdAt?: Timestamp;
};

type PostWithId = Post & { id: string };

const Home = () => {
  const [postList, setPostList] = useState<PostWithId[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      //追加
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const data = await getDocs(q);
      console.log(data);
      console.log(data.docs);
      console.log(data.docs.map((doc) => ({ doc })));
      //データを取るために便利なデータ関数がfirebaseのなかに存在する
      //スプレッド構文をつかってid属性を追加する
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const posts: PostWithId[] = data.docs.map((doc) => ({
        ...(doc.data() as Post),
        id: doc.id,
      }));

      setPostList(posts);
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    //読み込み直さないといけない
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        // createdAt が存在すればDateに変換
        const formattedDate = post.createdAt
          ? post.createdAt.toDate().toLocaleString("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "日時不明";

        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.post}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              <span className="postDate">{formattedDate}</span>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
