import "./post.css";
import { MoreVert } from "@mui/icons-material"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";




function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FORLDER;
    const {user : currentUser} = useContext(AuthContext);


    useEffect(() =>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id , post.likes])


    useEffect(() => {

        const fetchUser = async () => {
            const res = await axios.get(`/api/users?userId=${post.userId}`);
            //console.log(res);
            setUser(res.data);
        }
        fetchUser()
    }, [post.userId])

    const likeHandler = () => {
        try{
            axios.put("/api/posts/" + post._id + "/like" , {userId : currentUser._id})
        }
        catch(err){

        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="postProfileImg" />
                        </Link>

                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>

                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <div className="postText">
                        {post?.desc}
                    </div>
                    <img className="postImg" src={PF + post.img} alt="" />
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
