import React from "react";

import HideIcon from "../../../../icons/hide-icon";

const HideButton = ({ onHide }) => {
  return (
    <button
      className="p-0 bg-transparent border-0 focus:outline-none cursor-pointer"
      onClick={onHide}
    >
      <HideIcon />
    </button>
  );
};

export default HideButton;
