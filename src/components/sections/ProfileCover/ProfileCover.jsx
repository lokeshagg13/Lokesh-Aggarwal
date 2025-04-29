import React from "react";
import { useNavigate } from "react-router-dom";

import cover from "../../../images/cover-image.jpg";

const ProfileCover = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className="h-60 w-full" onClick={handleClick}>
      <img
        src={cover}
        alt="cover"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ProfileCover;
