import { useState } from "react";
import { useSelector } from "react-redux";

const useGetPostDetails = () => {
  const { posts } = useSelector((state) => state.posts);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getPostDetails = (postId) => {
    const post = posts.filter((post) => post.id === parseInt(postId));
    return post;
  };

  return { isLoading, error, getPostDetails };
};

export default useGetPostDetails;
