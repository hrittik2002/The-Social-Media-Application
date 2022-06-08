import "./topbar.css"
import { Link , useNavigate } from 'react-router-dom';
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext"
function Topbar() {

  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FORLDER;

  const logout = () =>{
    localStorage.removeItem("user")
    window.location.reload();
  }
  
    return(
      <div className="topbarContainer">

        <div className="topbarLeft">
          <Link to='/' style={{ textDecoration: "none" }}>
            <span className="logo">HGSocial</span>
          </Link>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Search for friends, post and video" className="searchInput"></input>
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">
            <button onClick={logout}>Logout</button>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`} >
          <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg" />
          </Link>
        </div>

      </div>
    )
}
export default Topbar;