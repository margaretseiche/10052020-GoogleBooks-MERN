import React from "react";

const style = {
  background: "#008ae6"
}

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")} style={style}>
      {children}
    </button>
  );
}

export default Button;
