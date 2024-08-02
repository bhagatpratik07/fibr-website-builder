// @ts-nocheck
"use client";
// components/user/Button.tsx
"use client";
import { useNode } from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";
import useEditableText from "@/hooks/useEditable";

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
  fontSize?: string;
  bgColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  color = "black",
  text = "Button",
  fontSize = "16px",
  bgColor = "#f25816",
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  const {
    value: editableText,
    handleChange,
    handleKeyDown,
  } = useEditableText({
    property: "text",
    initialValue: text,
  });

  return (
    <button
      ref={(ref) => connect(drag(ref))}
      className={`btn ${size && `btn-${size}`} ${variant && `btn-${variant}`} ${
        color && `text-${color}`
      } `}
      style={{ backgroundColor: bgColor, fontSize }}
    >
      <ContentEditable
        html={editableText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tagName="p"
        style={{ fontSize }}
        suppressContentEditableWarning
      />
    </button>
  );
};

const ButtonSettings: React.FC = () => {
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
          min="12"
          max="36"
          value={parseInt(props.fontSize, 10)}
          onChange={(e) =>
            setProp((props) => (props.fontSize = `${e.target.value}px`))
          }
          className="w-full"
        />
        <p className="text-sm">Size: {props.fontSize}</p>
      </div>
      <div>
        <p className="font-semibold">Button Size</p>
        <div className="flex flex-wrap space-x-2">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <label key={size} className="flex items-center space-x-1">
              <input
                type="radio"
                name="size"
                value={size}
                checked={props.size === size}
                onChange={(e) =>
                  setProp((props) => (props.size = e.target.value))
                }
                className="form-radio"
              />
              <span>{size.toUpperCase()}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold">Background Color</p>
        <input
          type="color"
          value={props.bgColor}
          onChange={(e) => setProp((props) => (props.bgColor = e.target.value))}
          className="w-full"
        />
        <p className="text-sm">Color: {props.bgColor}</p>
      </div>
    </div>
  );
};

Button.craft = {
  props: {
    size: "small",
    variant: "contained",
    color: "primary",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
  rules: {
    canDrag: (node) => node.data.props.text != "Drag",
  },
};
