"use client";
import { useNode } from "@craftjs/core";
import React, { ReactNode } from "react";

interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "";
  color?: string;
  text?: string;
}

export const Button = ({ size, variant, color, text }: ButtonProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <button
      ref={(ref) => connect(drag(ref))}
      className={`btn btn-${size} btn-${variant} ${color}`}
    >
      {text}
    </button>
  );
};

Button.craft = {
  rules: {
    canDrag: (node) => node.data.props.text != "Drag",
  },
};
