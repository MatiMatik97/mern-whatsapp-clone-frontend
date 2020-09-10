import React from "react";
import "./SidebarChat.scss";
import { Avatar } from "@material-ui/core";

interface SidebarChatProps {
  image: string;
  name: string;
  message: string;
}

const SidebarChat: React.FC<SidebarChatProps> = ({ image, name, message }) => {
  return (
    <div className="sidebarChat">
      <Avatar src={image} />
      
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
