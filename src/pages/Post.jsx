import { useState } from "react";
import { useParams } from "react-router-dom";
import useGetPostDetails from "../hooks/useGetPostDetails";
import { useNavigate } from "react-router-dom";
import useDeletePost from "../hooks/useDeletePost";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPostDetails } = useGetPostDetails();
  const [currentPost, setCurrentPost] = useState([]);
  const { deletePostbyId, isLoading } = useDeletePost();

  const handleEdit = () => {
    navigate(`/posts/edit/${id}`);
  };
  const handleDelete = async () => {
    const result = await deletePostbyId(id);
    if (result) {
      setCurrentPost(null);
      navigate("/posts");
    }
  };

  if (currentPost.length < 1) {
    const details = getPostDetails(id);
    if (details.length >= 1) {
      setCurrentPost(...details);
    }
  }

  const post = currentPost ? currentPost : null;

  return (
    <div className="w-full m-20">
      <div className="w-full p-5 text-4xl font-bold">{post && post.title}</div>
      <div className="w-full p-7 text-lg font-normal">{post && post.body}</div>
      <div>
        <button
          className="px-10 py-5 bg-cyan-300 rounded-lg text-lg font-medium hover:bg-cyan-400"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="px-10 py-5 bg-red-500 rounded-lg text-lg font-medium hover:bg-red-600 m-5"
          onClick={handleDelete}
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default Post;
