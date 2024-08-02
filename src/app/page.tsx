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
import Navbar from "@/components/templates/Navbar";
import Hero from "@/components/templates/Hero";

export default function App() {
  return (
    <div className="mx-auto">
      <h1 className="text-md text-center mb-4">
        Website Builder for Fibr, made with ❤️ by Pratik
      </h1>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          Navbar,
          Hero,
        }}
      >
        {/* <Topbar /> */}
        <div className="flex gap-4">
          <div className=" bg-white p-4 rounded-lg shadow-md">
            <Toolbox />
            <SettingsPanel />
          </div>
          <div className="flex-1">
            <Frame>
              <Element is={Container} padding={15} background="white" canvas>
                <Navbar />
                <Hero />
                {/* <div>
                  <Element
                    is={Container}
                    padding={10}
                    background="white"
                    canvas
                  >
                    <Text text="Hi world!" fontSize={"10"} />
                    <Card
                      title={"Hello"}
                      content={"This is content"}
                      buttonText={"button"}
                    />
                    <Text text="It's me again!" fontSize={"10"} />
                    <Button />
                  </Element>
                </div> */}
              </Element>
            </Frame>
          </div>
        </div>
      </Editor>
    </div>
  );
}
