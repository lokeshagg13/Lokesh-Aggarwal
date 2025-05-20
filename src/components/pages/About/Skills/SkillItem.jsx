import React from "react";

import SkillSubItem from "./SkillSubItem";
import ExpandButton from "./ExpandButton";
import HideButton from "./HideButton";

const SkillItem = (props) => {
  const { id, skill, active, onExpand, onHide } = props;
  const { title, percentage, sub } = skill;
  return (
    <div className="w-full md:w-1/2 relative">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="text-sm text-gray-400 font-light">{title}</h5>
          <div className="text-sm text-purple-400">
            {sub &&
              sub.length > 0 &&
              (active ? (
                <HideButton onHide={onHide} />
              ) : (
                <ExpandButton uniqueKey={id} onExpand={onExpand} />
              ))}
          </div>
        </div>
        {sub && sub.length > 0 && active ? (
          <div className="p-2">
            {sub.map((subskill, idx) => (
              <SkillSubItem key={`sub_${idx}`} skill={subskill} />
            ))}
          </div>
        ) : (
          <div className="w-full bg-purple-200 relative h-2 rounded">
            <div
              className="absolute h-full left-0 top-0 bg-purple-600 rounded"
              style={{ width: `${percentage}` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillItem;
