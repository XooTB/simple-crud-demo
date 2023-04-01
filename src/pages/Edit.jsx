import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetPostDetails from "../hooks/useGetPostDetails";
import useEditPost from "../hooks/useEditPost";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const { getPostDetails } = useGetPostDetails();
  const [currentPost, setCurrentPost] = useState([]);
  const { editPost, isLoading } = useEditPost();
  const navigate = useNavigate();

  if (currentPost.length < 1) {
    const details = getPostDetails(id);
    if (details.length >= 1) {
      setCurrentPost(...details);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const userId = currentPost.userId;
    const result = await editPost(id, title, body, userId);
    if (result) {
      navigate(`/posts/${id}`);
    }
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
          defaultValue={currentPost.title}
        />
        <textarea
          cols="200"
          rows="150"
          type="text"
          name="body"
          placeholder="Your Content"
          className="border border-gray-200 border-solid p-3 rounded-lg m-5"
          defaultValue={currentPost.body}
        />
        <button
          type="submit"
          className="bg-cyan-200 px-10 py-5 rounded-lg hover:bg-cyan-400 text-lg font-semibold m-5"
        >
          {isLoading ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Edit;
