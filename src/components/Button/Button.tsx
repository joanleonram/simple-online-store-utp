import React from "react";
import { Button as AntButton } from "antd";

interface ButtonProps {
  variant: "link" | "text" | "default" | "primary" | "dashed" | undefined
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  return (
    <AntButton type={variant} onClick={() => onClick && onClick()}>
      {children}
    </AntButton>
  );
};

export default Button;
