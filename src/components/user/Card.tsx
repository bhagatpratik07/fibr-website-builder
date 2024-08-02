"use client";
import React from "react";
import { Container, ContainerSettings } from "./Container";
import { Element, useNode } from "@craftjs/core";
import { Button } from "./Button";
import { Text } from "./Text";
import useEditable from "@/hooks/useEditable";
import { text } from "stream/consumers";

interface CardProps {
  title: string;
  content: string;
  buttonText: string;
  cardColor?: string;
  textColor?: string;
  cardSize?: string;
  textSize?: string;
}

interface CardToDownProps {
  children: React.ReactNode;
}

export const CardTop = ({ children }: CardToDownProps) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNodes: any[]) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }: CardToDownProps) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    canMoveIn: (incomingNodes: any[]) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
  related: {
    settings: ContainerSettings,
  },
};

const Card = ({
  title,
  content,
  buttonText,
  cardColor = "bg-primary",
  textColor = "text-primary-content",
  cardSize = "w-96",
  textSize = "text-base",
}: CardProps) => {
  const {
    value: editableTitle,
    handleChange: handleTitleChange,
    handleKeyDown: handleTitleKeyDown,
  } = useEditable({
    property: "title",
    initialValue: title,
  });

  const {
    value: editableContent,
    handleChange: handleContentChange,
    handleKeyDown: handleContentKeyDown,
  } = useEditable({
    property: "content",
    initialValue: content,
  });

  const {
    value: editableButtonText,
    handleChange: handleButtonTextChange,
    handleKeyDown: handleButtonTextKeyDown,
  } = useEditable({
    property: "buttonText",
    initialValue: buttonText,
  });

  return (
    <Container>
      <div
        style={{ background: cardColor }}
        className={`card ${cardColor} ${textColor} ${cardSize}`}
      >
        <div className="card-body">
          <Element id="text" is={CardTop} canvas>
            <h2
              className={`card-title ${textSize}`}
              onKeyDown={handleTitleKeyDown}
            >
              <div
                style={{ color: textColor, fontSize: textSize }}
                contentEditable
                onInput={handleTitleChange}
                suppressContentEditableWarning
              >
                {editableTitle}
              </div>
            </h2>
            <p className={textSize}>
              <div
                style={{ color: textColor, fontSize: textSize }}
                contentEditable
                onInput={handleContentChange}
                suppressContentEditableWarning
              >
                {editableContent}
              </div>
            </p>
          </Element>
          <div className="card-actions justify-end">
            <Element id="buttons" is={CardBottom} canvas>
              <button className="btn">
                <div
                  style={{
                    color: textColor,
                    fontSize: textSize,
                  }}
                  contentEditable
                  onInput={handleButtonTextChange}
                  suppressContentEditableWarning
                >
                  {editableButtonText}
                </div>
              </button>
            </Element>
          </div>
        </div>
      </div>
    </Container>
  );
};

const CardSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4">
      <div>
        <p className="font-semibold">Card Color</p>
        <input
          type="color"
          value={props.cardColor || "#000000"}
          onChange={(e) =>
            setProp((props) => (props.cardColor = e.target.value))
          }
          className="w-full"
        />
      </div>
      {/* <div>
        <p className="font-semibold">Text Color</p>
        <input
          type="color"
          value={props.textColor || "#ffffff"}
          onChange={(e) =>
            setProp((props) => (props.textColor = e.target.value))
          }
          className="w-full"
        />
      </div> */}
      <div>
        <p className="font-semibold">Card Size</p>
        <select
          value={props.cardSize || "w-96"}
          onChange={(e) =>
            setProp((props) => (props.cardSize = e.target.value))
          }
          className="w-full"
        >
          <option value="w-64">Small</option>
          <option value="w-96">Medium</option>
          <option value="w-128">Large</option>
        </select>
      </div>
      {/* <div>
        <p className="font-semibold">Text Size</p>
        <select
          value={props.textSize || "text-base"}
          onChange={(e) =>
            setProp((props) => (props.textSize = e.target.value))
          }
          className="w-full"
        >
          <option value="text-sm">Small</option>
          <option value="text-base">Medium</option>
          <option value="text-lg">Large</option>
        </select>
      </div> */}
    </div>
  );
};

Card.craft = {
  props: {
    title: "Card Title",
    content: "Card Content",
    buttonText: "Click Me",
    cardColor: "bg-primary",
    textColor: "text-primary-content",
    cardSize: "w-96",
    textSize: "text-base",
  },
  related: {
    settings: CardSettings,
  },
};

export default Card;
