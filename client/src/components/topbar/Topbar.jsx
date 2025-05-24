// Topbar.js
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import profilePicture from "../../assets/profile.jpeg";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Akbar Ali</span>
      </div>
      
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
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
        
        <div className="profilePictureContainer">
          <img
            src={profilePicture}
            alt="Profile"
            className="topbarImg"
          />
          <div className="onlineIndicator"></div>
        </div>
      </div>
    </div>
  );
}