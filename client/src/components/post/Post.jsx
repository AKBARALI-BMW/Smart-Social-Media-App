import "./post.css";
import { MoreVert, FavoriteBorder, Favorite } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // Find the user who created this post
  const postUser = Users.find((u) => u.id === post?.userId);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <div className="profileImgContainer">
              <img
                className="postProfileImg"
                src={
                  postUser?.profilePicture ||
                  "https://via.placeholder.com/40x40/gray/white?text=User"
                }
                alt=""
              />
              <div className="onlineIndicator"></div>
            </div>
            <div className="userInfo">
              <span className="postUsername">{postUser?.username}</span>
              <span className="postDate">{post.date}</span>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert className="moreIcon" />
          </div>
        </div>
        
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post.photo && (
            <div className="postImgContainer">
              <img className="postImg" src={post.photo} alt="" />
              <div className="postImgOverlay"></div>
            </div>
          )}
        </div>
        
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="likeContainer" onClick={likeHandler}>
              {isLiked ? (
                <Favorite className="likeIcon liked heartBeat" />
              ) : (
                <FavoriteBorder className="likeIcon" />
              )}
            </div>
            <img
              className="likeIcon"
              src="https://cdn-icons-png.flaticon.com/512/25/25297.png"
              alt="like"
              title="Like this post"
              onClick={likeHandler}
              style={{ 
                cursor: 'pointer', 
                width: '24px', 
                height: '24px',
                filter: isLiked ? 'hue-rotate(320deg) saturate(2)' : 'none'
              }}
            />
            {/* <img
              className="likeIcon"
              src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
              alt="comment"
              title="Comment on this post"
              style={{ 
                cursor: 'pointer', 
                width: '24px', 
                height: '24px'
              }} */}
          
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}