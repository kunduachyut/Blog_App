import React from "react";
import "../Style/comingSoon.css"; 

const ComingSoon = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black h-16 flex items-center">
      <div className="animate-scroll text-white text-2xl font-semibold">
        Coming soon &nbsp; • &nbsp; Coming soon &nbsp; • &nbsp; Coming soon
      </div>
    </div>
  );
};

export default ComingSoon;
