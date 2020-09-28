import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ processType, children, ...otherProps }) => {
  return (
    <button
      className={`btn ${
        processType === "delete" ? "btn-delete" : "btn-update"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
