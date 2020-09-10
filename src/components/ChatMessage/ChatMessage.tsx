import React from "react";
import "./ChatMessage.scss";

interface ChatMessageProps {
  name: string;
  message: string;
  timestamp: string;
  own: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  name,
  message,
  timestamp,
  own,
}) => {
  return (
    <p className={`chatMessage ${own ? "chatMessage--own" : ""}`}>
      <span className="chatMessage__name">{name}</span>
      {message}
      <br />
      <span className="chatMessage__timestamp">{timestamp}</span>
    </p>
  );
};

export default ChatMessage;
