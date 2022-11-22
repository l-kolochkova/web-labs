import React from "react";
import { useState, useEffect } from "react";
import PostPreview from "./PostPreview";
import "./Feed.css";
import { redirect, useNavigate } from "react-router-dom";

export default function Feed(props) {
  const [posts, setPosts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      fetch("http://127.0.0.1:1234/feed/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error(response.status);
          else return response.json();
        })
        .then((data) => setPosts(data))
        .catch((e) => {
          console.log(e.message);
          navigate("/logout");
        });
    };

    fetchData();
  }, []);

  return (
    <div className="feed">
      {posts?.length ? (
        posts.map((post) => <PostPreview key={post.id} to_render={post} />)
      ) : (
        <p className="empty-feed">"Nothing here yet..."</p>
      )}
    </div>
  );
}
