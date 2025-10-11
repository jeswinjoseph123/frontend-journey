import { useState } from "react";
import spinner from "../assets/loading-spinner.gif";
export function ChatInput({ chatMessages, setchatMessages }) {
  const [inputText, setinputText] = useState("");
  const [loading, setLoading] = useState(false);

  function saveInputText(e) {
    setinputText(e.target.value);
  }

  function sendMessage() {
    const newChatMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setchatMessages(newChatMessage);

    setLoading(true);
    const response = Chatbot.getResponse(inputText);
    setchatMessages([
      ...newChatMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setLoading(false);
    setinputText("");
  }

  return (
    <div className="chat-input-container flex mb-[60px]">
      <input
        className="chat-input p-[12px] px-[15px] rounded-[10px] border text-[15px] flex-grow"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button
        onClick={sendMessage}
        className="send-button bg-green-700 text-white py-[12px] px-[20px] ml-[10px] rounded-[10px] text-[15px] cursor-pointer border-none"
      >
        Send
      </button>
      {loading && (
        <img
          src={spinner}
          alt="Loading..."
          className="w-[40px] h-[40px] ml-3 animate-spin"
        />
      )}
    </div>
  );
}
