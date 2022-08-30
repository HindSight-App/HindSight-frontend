import React, { useEffect } from "react";
import "./PostList.css";
import { useState } from "react";
import { Profile, Post } from "../Types/types";
import { getPostsById } from "../services/AuthUtils";
import { IonItem, IonRow, IonCol, IonGrid } from "@ionic/react";
import PostEl from "./PostEl";
import { client } from "../services/client";


const PostList = ({ 
  id,
  created_at,
  user_id,
  username,
  karma,
  avatar }: Profile) => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    async function loadPosts() {
      const result = await getPostsById(user_id);
      setPosts(result);
      await client
        .from('*')
        .on('*', async (payload) => {
          const newResult = await getPostsById(user_id);
          setPosts(newResult);
        })
        .subscribe();
    }
    loadPosts();
  }, [user_id]);
  return (
  <IonGrid>
    {posts.map((post:Post) => (
      <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
        <IonCol className={post.type}>
          <IonItem className={post.type}>
            <PostEl key={post.id} {...post}/>
          </IonItem>
        </IonCol>
      </IonRow>
    ))}
  </IonGrid>
)};

export default PostList;
