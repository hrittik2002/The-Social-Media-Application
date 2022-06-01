import "./post.css";
import {MoreVert} from "@mui/icons-material" 
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({post}) {
    const [like , setLike] = useState(post.like);
    const [isLiked , setIsLikeed] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FORLDER;

    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1);
        setIsLikeed(!isLiked)
    }

  return (
   <div className="post">
       <div className="postWrapper">

           <div className="postTop">
               <div className="postTopLeft">
                   <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">
                        {Users.filter((u) => u.id === post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
               </div>
               <div className="postTopRight">
                   <MoreVert/>
               </div>
           </div>

           <div className="postCenter">
               <div className="postText">
                   {post?.desc}
               </div>
               <img className="postImg" src={PF+post.photo} alt="" />
           </div>

           <div className="postBottom">
               <div className="postBottomLeft">
                   <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                   <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                   <span className="postLikeCounter">{like} people liked it</span>
               </div>
               <div className="postBottomRight">
                   <div className="postCommentText">{post.comment} comments</div>
               </div>
           </div>

       </div>
   </div>
  );
}

export default Post;
