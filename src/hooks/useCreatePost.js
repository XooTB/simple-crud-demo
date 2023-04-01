import React, { useState } from "react";
import { addSinglePost } from "../redux/posts";
import { useDispatch } from "react-redux";

const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const createPost = async (title, body) => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((post) => {
        dispatch(addSinglePost(post));
        setIsLoading(false);
      });
  };

  return { isLoading, error, createPost };
};

export default useCreatePost;
