import React from "react";

import LoadingImage from "../../../images/loading.gif";
import ChatbotIcon from "../../../icons/chatbot-icon";

const BotMessage = ({ message = "", loading = false, error = false }) => {
  return (
    <div className="flex items-center gap-10">
      <div className="w-8 rounded-circle bg-white flex-shrink-0 align-self-end">
        <ChatbotIcon fillColor="purple" />
      </div>
      {loading ? (
        <div className="px-4 bg-purple-100 rounded-left shadow max-w-75">
          <img src={LoadingImage} alt="Thinking..." width={32} height={16} />
        </div>
      ) : (
        <p
          className={`px-4 py-2 bg-purple-100 ${
            error ? "text-red" : "text-black"
          } text-xs rounded-left shadow max-w-75 break-word-wrap`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default BotMessage;
