import { useState } from "react";
import ChatbotIconImage from "../../../images/chatbot/chatbot-icon-transp.png";
import ChatScreen from "./ChatScreen";

const Chatbot = () => {
  const [status, setStatus] = useState("close");

  const openChatbot = () => {
    setStatus("open");
  };

  const closeChatbot = () => {
    setStatus("minimized");
  };

  return (
    <>
      {status !== "open" && (
        <button
          className="fixed bottom-8 right-4 z-100 cursor-pointer"
          onClick={openChatbot}
        >
          <div className="fixed bottom-13.5 right-5.25 z-100 w-14">
            <img src={ChatbotIconImage} alt="Ask Me" />
          </div>
          <div className="border-1 text-xs px-2 p-1 rounded-1 text-white bg-purple-600">
            Ask Lokesh
          </div>
        </button>
      )}

      <div
        className={`fixed top-0 right-4 z-100 h-screen w-full md:w-128 shadow-chat transition-transform duration-300 ${
          status === "close" ? 
            "hide" :
            status === "open" ?
                "translate-x-0" : 
                "translate-x-100"
        }`}
      >
        {
            status === "close" ? 
            "" : 
            <ChatScreen onClose={closeChatbot} />
        }
      </div>
    </>
  );
};

export default Chatbot;
