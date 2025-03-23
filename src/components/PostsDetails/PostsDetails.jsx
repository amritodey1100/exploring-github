import React from "react";
import { useLoaderData } from "react-router-dom";

const PostsDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <h1>Post details about : {post.id}</h1>
      <h2>Post title: {post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostsDetails;
