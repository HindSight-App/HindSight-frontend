import React, { useEffect } from "react";
import "./PostList.css";
import { useState } from "react";
import { Profile, Post } from "../Types/types";
import { getPostsById } from "../services/AuthUtils";
import { IonGrid, IonList } from "@ionic/react";
import PostEl from "./PostEl";
import { client } from "../services/client";

const PostList = ({
  id,
  created_at,
  user_id,
  username,
  karma,
  avatar,
}: Profile) => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    let subscription: any = null;
    const loadPosts = async () => {
      const result = await getPostsById(user_id);
      setPosts(result);
      subscription = client
        .from(`Posts:user_id=eq.${user_id}`)
        .on("*", async (payload) => {
          console.log(payload);
          if (payload.eventType === "DELETE") {
            setPosts((posts) =>
              posts.filter((post) => post.id !== payload.old.id)
            );
          } else {
            setPosts((posts) => [payload.new, ...posts]);
          }
        })
        .subscribe();
    };

    loadPosts();
    return () => {
      client.removeSubscription(subscription);
    };
  }, [user_id]);
  return (
    <IonGrid>
      <IonList>
        {posts.map((post: Post) => (
          <div>
            <PostEl key={post.id + post.title} {...post} />
          </div>
        ))}
      </IonList>
    </IonGrid>
  );
};

export default PostList;
