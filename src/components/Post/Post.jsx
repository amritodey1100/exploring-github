import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Post Detail</Link>{" "}
    </div>
  );
};

export default Post;
