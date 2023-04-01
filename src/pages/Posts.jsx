import React, { useEffect } from "react";
import { useGetPosts } from "../hooks/useGetPosts";
import { useSelector } from "react-redux";
import PostOverview from "../components/PostOverview";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { isLoading, error, getPost } = useGetPosts();
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  const handleClick = () => {
    getPost();
  };

  const handleCreation = () => {
    navigate("/posts/create");
  };
  return (
    <div>
      <div>
        <div className="w-full flex items-center justify-between p-5">
          {!(posts.length > 0) && (
            <div className="flex items-center">
              <button
                disabled={isLoading}
                onClick={handleClick}
                className="px-5 py-3 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                GET Posts
              </button>
              <p className="text-lg font-normal px-10">
                Click the button to get posts.
              </p>
            </div>
          )}
          <div className=" m-5">
            <button
              className="bg-cyan-400 px-6 py-4 rounded-lg mt-5 hover:bg-cyan-500"
              onClick={handleCreation}
            >
              Create a Post
            </button>
          </div>
        </div>
      </div>
      <div>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostOverview
              title={post.title}
              body={post.body}
              id={post.id}
              key={post.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Posts;
