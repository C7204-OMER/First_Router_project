import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);
  return (
    <div>
      <h2>Details {id}</h2>
      <p>{post?.id}</p>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
    </div>
  );
};
export default Details;
