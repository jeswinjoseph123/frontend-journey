import { useEffect, useRef } from "react";

import { ChatMessage } from "./ChatMessage";

export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div
      ref={chatMessagesRef}
      className="chat-messages-container flex-grow mt-[20px] overflow-y-auto overflow-x-hidden scrollbar-hide pb-[10px]"
    >
      {chatMessages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message.message}
          sender={message.sender}
          isLoading={message.isLoading}
        />
      ))}
    </div>
  );
}
