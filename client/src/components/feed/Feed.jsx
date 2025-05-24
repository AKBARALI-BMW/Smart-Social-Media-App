import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData"; // Uncomment this line if you have dummy data
// import { useEffect, useState } from "react";
import { Posts } from "../../dummyData"; // Importing dummy data for posts
export default function Feed() {
 

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}

      </div>
    </div>
  );
}
