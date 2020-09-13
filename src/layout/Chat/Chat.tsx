import React from "react";
import "./Chat.scss";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";
import ChatMessage from "../../components/ChatMessage/ChatMessage";

const Chat: React.FC = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://i.imgur.com/BSy52Gj.gif" />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <ChatMessage
          name="Mateusz"
          message="Lorem ipsum dolor sit amet."
          timestamp={new Date().toUTCString()}
          own={true}
        />

        <ChatMessage
          name="Piotr"
          message="Lorem ipsum dolor sit amet consectetur."
          timestamp={new Date().toUTCString()}
          own={false}
        />

        <ChatMessage
          name="Mateusz"
          message="Lorem ipsum dolor sit."
          timestamp={new Date().toUTCString()}
          own={true}
        />
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send</button>
        </form>

        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
