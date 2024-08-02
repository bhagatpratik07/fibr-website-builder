// @ts-nocheck
"use client";
// components/user/Button.tsx
"use client";
import { useNode } from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";

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
}

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  color = "black",
  text = "Button",
  fontSize = "16px",
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  return (
    <button
      ref={(ref) => connect(drag(ref))}
      className={`btn ${size && `btn-${size}`} ${variant && `btn-${variant}`} ${
        color && `text-${color}`
      } `}
    >
      <ContentEditable
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize }}
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
      {/* <div>
        <p className="font-semibold">Size</p>
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
        <p className="font-semibold">Variant</p>
        <div className="flex flex-wrap space-x-2">
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ].map((variant) => (
            <label key={variant} className="flex items-center space-x-1">
              <input
                type="radio"
                name="variant"
                value={variant}
                checked={props.variant === variant}
                onChange={(e) =>
                  setProp((props) => (props.variant = e.target.value))
                }
                className="form-radio"
              />
              <span>{variant.charAt(0).toUpperCase() + variant.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold">Color</p>
        <input
          type="color"
          value={props.color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
          className="w-full"
        />
      </div> */}
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
