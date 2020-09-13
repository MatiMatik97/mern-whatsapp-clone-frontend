import React from "react";
import "./SidebarChat.scss";
import { Avatar } from "@material-ui/core";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

interface SidebarChatProps {
  id: string;
  image: string;
  name: string;
  members: string;
}

const SidebarChat: React.FC<SidebarChatProps> = ({
  id,
  image,
  name,
  members,
}) => {
  return (
    <Link className="sidebarChat" to={`/rooms/${id}`}>
      <Avatar src={image} />

      <div className="sidebarChat__info">
        <TextTruncate line={2} element="h2" truncateText="..." text={name} />
        <TextTruncate line={2} element="p" truncateText="..." text={members} />
      </div>
    </Link>
  );
};

export default SidebarChat;
