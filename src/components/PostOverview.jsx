import React from "react";
import { useNavigate } from "react-router-dom";

const PostOverview = ({ title, body, id }) => {
  const naviagate = useNavigate();
  const handleClick = () => {
    naviagate(`/posts/${id}`);
  };
  return (
    <div className="flex flex-col m-10 mb-5 border border-gray-300 rounded-lg py-5 px-3">
      <h1 className="text-4xl text-gray-500 pb-5">{title}</h1>
      <p>{body}</p>
      <button
        className="bg-cyan-300 w-32 px-5 py-3 rounded-lg mt-5 hover:bg-cyan-400"
        onClick={handleClick}
      >
        Read More
      </button>
    </div>
  );
};

export default PostOverview;
