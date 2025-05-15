import { useRef } from "react";
import UpIcon from "../../../icons/up-icon";

const getChatbotResponse = async (userMessage) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: userMessage,
    }),
  };

  // const api_url = "http://127.0.0.1:5000/chatbot";
  const api_url =
    "https://lkaggarwal1997-lokesh-profile-chatbot.hf.space/chatbot";
  try {
    const response = await fetch(api_url, requestOptions);
    const data = await response.json();
    if (!response.ok)
      throw new Error(
        data.error ||
          "Currently, I am unable to get the answer for you. Please try a different question or try again later. You can also email me at lokesh.kaggarwal1397@gmail.com."
      );
    return { status: "success", message: data.answer };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

const ChatForm = ({ addToChatHistory, setIsLoading }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Updated chat history with user's message
    addToChatHistory("user", userMessage);

    setIsLoading(true);
    getChatbotResponse(userMessage).then((response) => {
      setIsLoading(false);
      addToChatHistory(
        response.status === "success" ? "bot" : "error",
        response.message
      );
    });
  };

  return (
    <form
      action="#"
      className="flex items-center bg-white outline-1 rounded-2 shadow focus-within:outline"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your question here..."
        className="border-0 outline-0 w-full bg-none h-4 px-4 py-2 text-sm show-btn-on-valid"
        required
      />
      <button
        type="submit"
        className="hide items-center justify-center h-8 w-8 p-2 border-0 outline-0 cursor-pointer mr-half flex-shrink-0 rounded-circle bg-purple-600 text-white hover:bg-purple-800 transition"
      >
        <UpIcon />
      </button>
    </form>
  );
};

export default ChatForm;
