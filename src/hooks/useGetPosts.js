import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPost } from "../redux/posts";

export const useGetPosts = () => {
  const { posts } = useSelector((state) => state.posts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const getPost = async () => {
    setIsLoading(true);

    const posts = localStorage.getItem("posts");
    if (posts) {
      dispatch(addPost(JSON.parse(posts)));
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          dispatch(addPost(data));
          localStorage.setItem("posts", JSON.stringify(data));
          setIsLoading(false);
        });
    }
  };

  return { isLoading, error, getPost };
};
