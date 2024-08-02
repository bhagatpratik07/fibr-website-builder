"use client";

import React from "react";
import { Toolbox } from "../components/Toolbox";
import { SettingsPanel } from "../components/SettingsPanel";
import { Topbar } from "../components/Topbar";

import { Button } from "../components/user/Button";
import Card, { CardBottom, CardTop } from "../components/user/Card";
import { Text } from "../components/user/Text";
import { Editor, Frame, Element } from "@craftjs/core";
import { Container } from "../components/user/Container";

export default function App() {
  return (
    <div className="mx-auto w-4/5 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-4">
        A super simple page editor
      </h1>
      <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>
        <Topbar />
        <div className="flex gap-4">
          <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
            <Toolbox />
            <SettingsPanel />
          </div>
          <div className="flex-1">
            <Frame>
              <Element is={Container} padding={15} background="#eee" canvas>
                <div>
                  <Element
                    is={Container}
                    padding={10}
                    background="black"
                    canvas
                  >
                    <Text text="Hi world!" fontSize={"10"} />
                    <Card
                      title={"Hello"}
                      content={"This is content"}
                      buttonText={"button"}
                    />
                    <Text text="It's me again!" fontSize={"10"} />
                    <Button text="Click me!" size="sm" />
                  </Element>
                </div>
              </Element>
            </Frame>
          </div>
        </div>
      </Editor>
    </div>
  );
}
