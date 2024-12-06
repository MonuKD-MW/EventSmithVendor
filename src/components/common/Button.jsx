import React, { forwardRef } from "react";
 // Import the separate CSS file

const Button = forwardRef(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const classes = `button ${variant} ${size} ${className}`;

    return (
      <button className={classes} ref={ref} {...props} />
    );
  }
);

Button.displayName = "Button";

export default Button;
