import React from "react";

import ExpandIcon from "../../../../icons/expand-icon";

const ExpandButton = ({ uniqueKey, onExpand }) => {
  return (
    <button
      className="p-0 bg-transparent border-0 focus:outline-none cursor-pointer"
      onClick={() => onExpand(uniqueKey)}
    >
      <ExpandIcon />
    </button>
  );
};

export default ExpandButton;
