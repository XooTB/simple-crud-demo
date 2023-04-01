import React from "react";
import useCreatePost from "../hooks/useCreatePost";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { isLoading, error, createPost } = useCreatePost();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    createPost(title, body);
    navigate("/posts");
  };

  return (
    <div className="w-full min-h-screen">
      <form
        className=" m-20 h-80 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Enter a Title"
          className="w-64 border border-gray-200 border-solid p-3 h-14 rounded-lg m-5"
        />
        <textarea
          cols="200"
          rows="150"
          type="text"
          name="body"
          placeholder="Your Content"
          className="border border-gray-200 border-solid p-3 rounded-lg m-5"
        />
        <button
          type="submit"
          className="bg-cyan-200 px-10 py-5 rounded-lg hover:bg-cyan-400 text-lg font-semibold m-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
