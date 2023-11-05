import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blogcard from "./Blogcard";

const Blog = () => {
  const [blog, setblog] = useState([]);
  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => setblog(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 ml-[90px] mt-[20px]">
        {blog.map((item) => (
          <Blogcard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
