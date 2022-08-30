import React, { useEffect } from "react";
import "./PostList.css";
import { useState } from "react";
import { Profile, Post } from "../Types/types";
import { getPostsById } from "../services/AuthUtils";
import { IonItem } from "@ionic/react";
import PostEl from "./PostEl";


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
    }
    loadPosts();
  }, [user_id]);
  return (
  <IonItem>
    {posts.map((post:Post) => (
      
      <PostEl key={post.id} {...post}/>
      
    ))}
  </IonItem>
)};

export default PostList;
