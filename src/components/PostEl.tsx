import React from "react";
import "./PostList.css";
import { Post } from "../Types/types";

const PostEl = ({ 
  title,
  description,
  type,
  visability,
  datetime }: Post) => {
      if (type === 'Idea') {
        return (
        <div className="idea">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        )
      } else if (type === 'Dream') {
        return (
        <div className="dream">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        )
      }
      else if (type === 'Memory') {
        return (
        <div className="memory">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        )
      }
      else if (type === 'Thought') {
        return (
        <div className="thought">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        )
      }
    };

export default PostEl;
