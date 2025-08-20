import React from "react";

const BaseModal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-10">
      {children}
    </div>
  );
};

export default BaseModal;
