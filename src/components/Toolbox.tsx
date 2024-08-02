import React from "react";
import { Button } from "./user/Button";
import { useEditor } from "@craftjs/core";
import { Text } from "./user/Text";
import Card from "./user/Card";
import { Container } from "./user/Container";
import Navbar from "./templates/Navbar";
import Hero from "./templates/Hero";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <div className="px-2 py-2">
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="pb-2">
          <p>Drag to add</p>
        </div>
        <div className="flex flex-col">
          <button
            ref={(ref) =>
              connectors.create(ref, <Button text="Click me" size="sm" />)
            }
            variant="contained"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Button
          </button>
        </div>
        <div className="flex flex-col">
          <button
            ref={(ref) => connectors.create(ref, <Text />)}
            variant="contained"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Text
          </button>
        </div>
        <div className="flex flex-col">
          <button
            ref={(ref) => connectors.create(ref, <Navbar />)}
            variant="contained"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Navbar
          </button>
        </div>
        <div className="flex flex-col">
          <button
            ref={(ref) => connectors.create(ref, <Hero />)}
            variant="contained"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Hero
          </button>
        </div>
        {/* <div className="flex flex-col">
          <button
            ref={(ref) =>
              connectors.create(
                ref,
                <Container                 
                />
              )
            }
            variant="contained"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Container
          </button>
        </div> */}
        <div className="flex flex-col">
          <button
            ref={(ref) =>
              connectors.create(
                ref,
                <Card
                  title={"New Card"}
                  content={"New content"}
                  buttonText={"new btn"}
                />
              )
            }
            variant="contained"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Card
          </button>
        </div>
      </div>
    </div>
  );
};
