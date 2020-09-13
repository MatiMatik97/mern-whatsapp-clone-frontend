import React, { forwardRef, Ref } from "react";
import "./ChatMessage.scss";

interface ChatMessageProps {
  name: string;
  message: string;
  timestamp: string;
  own: boolean;
}

const ChatMessage = forwardRef(
  (
    { name, message, timestamp, own }: ChatMessageProps,
    ref: Ref<HTMLParagraphElement>
  ) => (
    <p ref={ref} className={`chatMessage ${own ? "chatMessage--own" : ""}`}>
      <span className="chatMessage__name">{name}</span>
      {message}
      <br />
      <span className="chatMessage__timestamp">{timestamp}</span>
    </p>
  )
);

export default ChatMessage;
