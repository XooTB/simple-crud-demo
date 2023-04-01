import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSinglePost } from "../redux/posts";

const useEditPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const editPost = async (id, title, body, userId) => {
    setIsLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: title,
          body: body,
          userId: userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const result = await response.json();
    dispatch(updateSinglePost(result));
    setIsLoading(false);
    return true;
  };

  return { editPost, isLoading };
};

export default useEditPost;
