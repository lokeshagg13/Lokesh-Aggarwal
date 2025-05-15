import React from "react";

const UserMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-end gap-10">
      <p className="px-4 py-2 bg-purple-600 text-white text-xs rounded-right shadow max-w-75 break-word-wrap">
        { message }
      </p>
    </div>
  );
};

export default UserMessage;
