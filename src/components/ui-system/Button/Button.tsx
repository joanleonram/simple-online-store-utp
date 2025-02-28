import React from "react";
import { Button as AntButton } from "antd";

interface ButtonProps {
  variant: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  danger?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, danger, disabled, children, onClick }) => {
  return (
    <AntButton
      type={variant}
      danger={danger}
      disabled={disabled}
      onClick={() => onClick && onClick()}
    >
      {children}
    </AntButton>
  );
};

export default Button;