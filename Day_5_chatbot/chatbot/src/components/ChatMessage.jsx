import robot from "../assets/robot.png";
import user from "../assets/user.png";

export function ChatMessage({ message, sender }) {
  if (sender === "user") {
    return (
      <div className="chat-message-user flex justify-end items-start">
        <div className="chat-message-text bg-[#eeeeee] py-[15px] px-[20px] rounded-[10px] mx-[10px] mb-[20px] max-w-[300px]">
          {message}
        </div>
        <img src={user} alt="User" className="w-[45px]" />
      </div>
    );
  }
  return (
    <div className="chat-message-robot flex items-start">
      <img src={robot} alt="Robot" className="w-[45px]" />
      <div className="chat-message-text bg-[#eeeeee] py-[15px] px-[20px] rounded-[10px] mx-[10px] mb-[20px] max-w-[300px]">
        {message}
      </div>
    </div>
  );
}
