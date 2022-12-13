import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

function ExpandablePanel({ header, children, className }) {
  const [expanded, setExpanded] = useState(false);
  const appliedClassName = className;

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`${appliedClassName} mb-2 border border-gray-500 rounded`}>
      <div
        className="flex p-2 justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div className="text-xl">
          {expanded ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}
export default ExpandablePanel;
