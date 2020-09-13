import React from "react";
import "./Sidebar.scss";
import { IconButton, Avatar } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../../components/SidebarChat/SidebarChat";
import { useAppContext } from "../../contexts/AppContext";

interface SidebarProps {
  rooms: Room[];
}

const Sidebar: React.FC<SidebarProps> = ({ rooms }) => {
  const [{ user }] = useAppContext();

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerInfo">
          <Avatar src={user?.photoURL || ""} />
          <h3>{user?.displayName || "Your name goes here..."}</h3>
        </div>

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        {rooms.map((room) => (
          <SidebarChat
            key={room._id}
            id={room._id}
            image={room.image}
            name={room.name}
            members={`${room.users.length} ${
              room.users.length === 1 ? "member" : "members"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
