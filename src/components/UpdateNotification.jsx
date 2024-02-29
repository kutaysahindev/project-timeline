import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";

const UpdateNotification = () => {
  const [showUpdateNotification, setShowUpdateNotification] = useState(true);
  return (
    <div className="fixed top-0 w-full flex justify-center">
      {showUpdateNotification && (
        <div className="mt-2 bg-yellow-300 p-2 rounded flex items-center text-yellow-900">
          <AiOutlineInfoCircle className="mr-1" />
          <span className="text-sm">Update available!</span>
        </div>
      )}
    </div>
  );
};

export default UpdateNotification;
