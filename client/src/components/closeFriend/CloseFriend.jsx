import './closeFriend.css'

const CloseFriend = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FORLDER;
    return (
        <div>
            <li className="sidebarFriend">
                <img src={PF+user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendNamer">{user.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend;