"use client";
import React from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

interface TextProps {
  text: string;
  fontSize: string;
  color: string;
  bold?: boolean;
  italic?: boolean;
}

const TextSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4">
      <div>
        <p className="font-semibold">Font Size</p>
        <input
          type="range"
          min="8"
          max="100"
          value={parseInt(props.fontSize, 10)}
          onChange={(e) =>
            setProp((props) => (props.fontSize = `${e.target.value}px`))
          }
          className="w-full"
        />
        <p className="text-sm">Size: {props.fontSize}</p>
      </div>
      <div>
        <p className="font-semibold">Text Color</p>
        <input
          type="color"
          value={props.color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
          className="w-full"
        />
        <p className="text-sm">Color: {props.color}</p>
      </div>
      <div className="flex space-x-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={props.bold}
            onChange={(e) =>
              setProp((props) => (props.bold = e.target.checked))
            }
            className="form-checkbox"
          />
          <span className="ml-2">Bold</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={props.italic}
            onChange={(e) =>
              setProp((props) => (props.italic = e.target.checked))
            }
            className="form-checkbox"
          />
          <span className="ml-2">Italic</span>
        </label>
      </div>
    </div>
  );
};

export const Text = ({ text, fontSize, color, bold, italic }: TextProps) => {
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
        style={{
          fontSize,
          color,
          fontWeight: bold ? "bold" : "normal",
          fontStyle: italic ? "italic" : "normal",
        }}
      />
    </div>
  );
};

Text.craft = {
  props: {
    text: "Hi, click to edit me",
    fontSize: "16", // Default font size as a string
    color: "#000000", // Default color
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: TextSettings,
  },
};
