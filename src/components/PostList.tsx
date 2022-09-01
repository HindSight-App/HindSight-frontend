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
    let subscription:any = null;
    async function loadPosts() {
      const result = await getPostsById(user_id);
      setPosts(result);
      subscription = client
        .from(`Posts:user_id=eq.${user_id}`)
        .on('*', async (payload) => {
          setPosts(posts => [payload.new, ...posts]);
        })
        .subscribe();
    }
    loadPosts();
    return () => {client.removeSubscription(subscription)}
  }, [user_id]);
  return (
  <IonGrid>
    {posts.map((post:Post) => (
      <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
        <IonCol >
          <IonItem class={post.type}>
            <PostEl key={post.id} {...post}/>
          </IonItem>
        </IonCol>
      </IonRow>
    ))}
  </IonGrid>
)};

export default PostList;
