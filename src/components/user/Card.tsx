"use client";
import React from "react";
import { Container } from "./Container";
import { Element, useNode } from "@craftjs/core";
import { Button } from "./Button";
import { Text } from "./Text";

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
};

const Card = ({ title, content, buttonText }: CardProps) => {
  return (
    <Container>
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <Element id="text" is={CardTop} canvas>
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
          </Element>
          <div className="card-actions justify-end">
            <Element id="buttons" is={CardBottom} canvas>
              <button className="btn">{buttonText}</button>
            </Element>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
