import React, { useEffect, useState } from "react";
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
import { useAppContext } from "../../contexts/AppContext";
import { formatDate } from "../../helpers";
import FlipMove from "react-flip-move";
import MessageService from "../../services/MessageService";

interface ChatProps {
  messages: Message[] | null;
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  const [msgInput, setMsgInput] = useState("");
  const [{ user, room }] = useAppContext();

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (msgInput === "") return;

    const msgData = {
      name: user?.displayName || "",
      message: msgInput,
      user_id: user?.uid || "",
      room_id: room?._id || "",
    };

    const responseSendMessage = await MessageService.sendMessage(
      msgData as Message
    );

    if (responseSendMessage.status === "SUCCESS") {
      setMsgInput("");
    }
  };

  useEffect(() => {
    const chatBodyElement = document.getElementById(
      "chat__body"
    ) as HTMLDivElement;
    chatBodyElement.scrollTop = chatBodyElement.scrollHeight;
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={room?.image || ""} />

        <div className="chat__headerInfo">
          <h3>{room?.name || "Room name"}</h3>
          <p>{`Room ID: ${room?._id || ""}`}</p>
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

      <div id="chat__body" className="chat__body">
        <FlipMove duration="200" enterAnimation="fade" leaveAnimation="none">
          {messages &&
            messages.map((message) => (
              <ChatMessage
                key={message._id}
                name={message.name}
                message={message.message}
                timestamp={formatDate(message.timestamp)}
                own={message.user_id === (user?.uid as string)}
              />
            ))}
        </FlipMove>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type a message"
            value={msgInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMsgInput(e.target.value)
            }
          />
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
