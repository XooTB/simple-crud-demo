import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/posts";

const useDeletePost = () => {
  const [isLoading, setIsLoading] = useState();
  const dispatch = useDispatch();

  const deletePostbyId = async (id) => {
    setIsLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch(deletePost(id));
      setIsLoading(false);
      return true;
    }
  };

  return { deletePostbyId, isLoading };
};

export default useDeletePost;
