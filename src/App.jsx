import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import { useGetPosts } from "./hooks/useGetPosts";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import { useEffect } from "react";

function App() {
  const { getPost } = useGetPosts();
  useEffect(() => {
    getPost();
  }, []);
  const { posts } = useSelector((state) => state.posts);

  // console.log(posts);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/edit/:id" element={<Edit />} />
        <Route path="/posts/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
