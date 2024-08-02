"use client";
import React from "react";
import { Container } from "./Container";
import { Element } from "@craftjs/core";

interface CardProps {
  title: string;
  content: string;
  buttonText: string;
}

const Card = ({ title, content, buttonText }: CardProps) => {
  return (
    <Container>
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <Element id="text" is="div" canvas>
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
          </Element>
          <div className="card-actions justify-end">
            <Element id="buttons" is="div" canvas>
              <button className="btn">{buttonText}</button>
            </Element>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
