import React from "react";
import { Button } from "./user/Button";
import { useEditor } from "@craftjs/core";
import { Text } from "./user/Text";
import Card from "./user/Card";
import { Container } from "./user/Container";
import Navbar from "./templates/Navbar";
import Hero from "./templates/Hero";

export const Toolbox = () => {
  const { connectors } = useEditor();

  const createButton = (ref, component, label) => (
    <button
      ref={ref}
      // onClick={() => connectors.create(ref, component)}
      className="btn btn-primary w-32 mb-2"
    >
      {label}
    </button>
  );

  return (
    <div className="p-4 space-y-4 bg-base-200 min-h-auto">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Drag to Add</h2>
        <p className="text-base text-gray-600">
          Select an element to add to the canvas
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2">
        <div className="flex flex-col items-center">
          {createButton(
            (ref) => connectors.create(ref, <Text />),
            <Text />,
            "Text"
          )}
        </div>
        <div className="flex flex-col items-center">
          {createButton(
            (ref) =>
              connectors.create(ref, <Button text="Click me" size="sm" />),
            <Button text="Click me" size="sm" />,
            "Button"
          )}
        </div>

        <div className="flex flex-col items-center">
          {createButton(
            (ref) => connectors.create(ref, <Navbar />),
            <Navbar />,
            "Navbar"
          )}
        </div>
        <div className="flex flex-col items-center">
          {createButton(
            (ref) => connectors.create(ref, <Hero />),
            <Hero />,
            "Hero"
          )}
        </div>
        {/* Uncomment this if you need the Container component */}
        {/* <div className="flex flex-col items-center">
          {createButton(
            (ref) => connectors.create(ref, <Container />),
            <Container />,
            "Container"
          )}
        </div> */}
        <div className="flex flex-col items-center">
          {createButton(
            (ref) =>
              connectors.create(
                ref,
                <Card
                  title="New Card"
                  content="New content"
                  buttonText="new btn"
                />
              ),
            <Card
              title="New Card"
              content="New content"
              buttonText="new btn"
            />,
            "Card"
          )}
        </div>
      </div>
    </div>
  );
};
