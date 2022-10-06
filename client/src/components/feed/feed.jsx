import React from "react";
import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className="feed">
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

export default Feed;
