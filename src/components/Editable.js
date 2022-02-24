import React, { useState } from "react";

const Editable = ({
  text,
  type,
  placeholder,
  children,
  ...props
}) => {


const [isEditing, setEditing] = useState(false);


  const handleKeyDown = (event, type) => {
  };


  return (
      <div classname="edit-text">
          <h1>Editable Text Box</h1>
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div
          onClick={() => setEditing(true)}
        >
          <span>
            {text || placeholder || "Editable content"}
          </span>
        </div>
      )}
    </section></div>
  );
};

export default Editable;