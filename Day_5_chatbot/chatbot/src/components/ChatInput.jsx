import { useState } from "react";

import axios from "axios";
export function ChatInput({ chatMessages, setchatMessages }) {
  const [inputText, setinputText] = useState("");

  function saveInputText(e) {
    setinputText(e.target.value);
  }

  async function sendMessage() {
    if (!inputText.trim()) return;

    // 1️⃣ Add user message immediately
    const newChatMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setchatMessages(newChatMessage);
    setinputText("");

    // 2️⃣ Add temporary bot loading message
    const loadingMessageId = crypto.randomUUID();
    setchatMessages([
      ...newChatMessage,
      {
        message: "",
        sender: "robot",
        id: loadingMessageId,
        isLoading: true,
      },
    ]);

    try {
      // 3️⃣ Call your backend
      const response = await axios.post("http://localhost:4000/api/chat", {
        message: inputText,
      });

      const botMessage = response.data.reply || "No response";

      // 4️⃣ Replace loading message with actual bot response
      setchatMessages([
        ...newChatMessage,
        {
          message: botMessage,
          sender: "robot",
          id: loadingMessageId,
        },
      ]);
    } catch (error) {
      console.error("Frontend error:", error);
      setchatMessages([
        ...newChatMessage,
        {
          message: "Something went wrong. Try again.",
          sender: "robot",
          id: loadingMessageId,
        },
      ]);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setinputText("");
    }
  }

  return (
    <div className="chat-input-container flex mb-[60px]">
      <input
        className="chat-input p-[12px] px-[15px] rounded-[10px] border text-[15px] flex-grow"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <button
        onClick={sendMessage}
        className="send-button bg-green-700 text-white py-[12px] px-[20px] ml-[10px] rounded-[10px] text-[15px] cursor-pointer border-none"
      >
        Send
      </button>
    </div>
  );
}
