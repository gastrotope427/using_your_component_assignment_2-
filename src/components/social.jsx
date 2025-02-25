// App.jsx
import React from "react";
import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    username: "john_doe",
    profilePic: "https://via.placeholder.com/50",
    content: "Hello world! My first post.",
  },
  {
    id: 2,
    username: "jane_smith",
    profilePic: "https://via.placeholder.com/50",
    content: "Enjoying the sunshine today! ☀️",
  },
];

function App() {
  return (
    <div className="app">
      <h1>Social Media Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;

// PostCard.jsx
import React from "react";
import LikeButton from "./LikeButton";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.profilePic} alt={post.username} className="profile-pic" />
      <div>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
}

export default PostCard;

// LikeButton.jsx
import React, { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`like-button ${liked ? "liked" : ""}`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

export default LikeButton;

// styles.css
.app {
  text-align: center;
  font-family: Arial, sans-serif;
}

.post-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px auto;
  width: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.like-button.liked {
  color: red;
}
