import { useEffect, useState, useRef } from "react";
import CloseIcon from "../../../icons/close-icon";
import ChatbotIcon from "../../../icons/chatbot-icon";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import ChatForm from "./ChatForm";
import ChatInfoPopover from "./ChatInfoPopover";

const ChatScreen = ({ onClose }) => {
  const chatBodyRef = useRef();
  // This might contain erroneous bot responses, so filter those out before using them in followup responses in the future.
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setIsLoading] = useState(true);

  // Update Chat History
  const addToChatHistory = (role = "user", message = "") => {
    setChatHistory((prevChatHistory) => {
      const newChatHistory = [...prevChatHistory];
      newChatHistory.push({
        role: role,
        message: message,
      });
      return newChatHistory;
    });
  };

  // Generate Bot Response

  // Initial Message by BOT
  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      addToChatHistory(
        "bot",
        "Hi there! 👋 I'm Lokesh, a Data Science graduate passionate about turning data into insights. I'm currently exploring exciting opportunities to kickstart my career. Feel free to ask me anything about my skills, projects, or experiences—I'd be happy to share my journey with you! 😊"
      );
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Auto Scroll to Chat's end whenever Chat History Updates
  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className="font-inter" style={{ margin: "0px 0px 64px 0px" }}>
      <div className="relative bg-white rounded-md shadow overflow-hidden h-full sm:ml-2">
        {/* Chat Header */}
        <div className="flex px-4 py-3 items-center justify-between bg-purple-600 text-white">
          <div className="flex gap-10 items-center">
            <div className="h-4 w-8 p-1 rounded-circle bg-white flex-shrink-0">
              <ChatbotIcon />
            </div>
            <h2 className="text-sm font-medium tracking-wide">Ask me</h2>
          </div>
          <div className="flex items-center justify-center gap-10">
            <ChatInfoPopover />
            <button
              className="border-0 outline-0 cursor-pointer hover:bg-purple-800 rounded-circle p-1"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div
          ref={chatBodyRef}
          className="relative flex flex-col gap-20 p-4 mb-4 overflow-y-auto h-screen-in"
        >
          {chatHistory.map((chatObj, index) =>
            chatObj.role === "user" ? (
              <UserMessage key={index} message={chatObj.message} />
            ) : chatObj.role === "bot" ? (
              <BotMessage key={index} message={chatObj.message} />
            ) : (
              <BotMessage key={index} message={chatObj.message} error={true} />
            )
          )}
          {loading && <BotMessage key={chatHistory.length} loading={true} />}
        </div>

        {/* Chat Footer */}
        <div className="absolute bottom-0 w-full bg-white p-3 border-t border-gray-400">
          <ChatForm
            addToChatHistory={addToChatHistory}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
