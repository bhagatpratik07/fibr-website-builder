"use client";
import React from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

interface TextProps {
  text: string;
  fontSize: string;
}

export const Text = ({ text, fontSize }: TextProps) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <ContentEditable
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
};

Text.craft = {
  props: {
    text: "Hi, click to edit me",
    fontSize: 20,
  },
  rules: {
    canDrag: (node) => node.data.props.text != "Drag",
  },
};
