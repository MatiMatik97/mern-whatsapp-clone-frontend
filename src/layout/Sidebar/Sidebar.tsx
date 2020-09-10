import React from "react";
import "./Sidebar.scss";
import { IconButton, Avatar } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../../components/SidebarChat/SidebarChat";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://i.imgur.com/BSy52Gj.gif" />

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
        <SidebarChat
          image="https://i.imgur.com/BSy52Gj.gif"
          name="Room Name #1"
          message="Last message... #1"
        />

        <SidebarChat
          image="https://i.imgur.com/BSy52Gj.gif"
          name="Room Name #2"
          message="Last message... #2"
        />

        <SidebarChat
          image="https://i.imgur.com/BSy52Gj.gif"
          name="Room Name #3"
          message="Last message... #3"
        />
      </div>
    </div>
  );
};

export default Sidebar;
