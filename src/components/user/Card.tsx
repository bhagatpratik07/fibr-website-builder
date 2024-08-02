"use client";
import React from "react";
import { Container, ContainerSettings } from "./Container";
import { Element, useNode } from "@craftjs/core";
import { Button } from "./Button";
import { Text } from "./Text";
import useEditable from "@/hooks/useEditable";

interface CardProps {
  title: string;
  content: string;
  buttonText: string;
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
    // Only accept Text
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
    // Only accept Buttons
    canMoveIn: (incomingNodes: any[]) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};

const Card = ({ title, content, buttonText }: CardProps) => {
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
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <Element id="text" is={CardTop} canvas>
            <h2 className="card-title" onKeyDown={handleTitleKeyDown}>
              <div
                contentEditable
                onInput={handleTitleChange}
                suppressContentEditableWarning
              >
                {editableTitle}
              </div>
            </h2>
            <p>
              <div
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

export default Card;
