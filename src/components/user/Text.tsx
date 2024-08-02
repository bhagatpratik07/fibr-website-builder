"use client";
import React from "react";
import { useNode } from "@craftjs/core";

interface TextProps {
  text: string;
  fontSize: string;
}

export const Text = ({ text, fontSize }: TextProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};

Text.craft = {
  rules: {
    canDrag: (node) => node.data.props.text != "Drag",
  },
};
