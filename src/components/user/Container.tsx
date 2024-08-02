// @ts-nocheck
"use client";

import { useNode } from "@craftjs/core";
import React, { ReactNode } from "react";

interface ContainerProps {
  background?: string;
  padding?: number;
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  background = "transparent",
  padding = 0,
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`my-1 rounded-lg shadow-md`}
      style={{ backgroundColor: background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};

export const ContainerSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4">
      <div>
        <p className="font-semibold">Background Color</p>
        <input
          type="color"
          value={props.background}
          onChange={(e) =>
            setProp((props) => (props.background = e.target.value))
          }
          className="w-full h-10 p-0 border-none cursor-pointer"
        />
      </div>
      <div>
        <p className="font-semibold">Padding</p>
        <input
          type="range"
          min="0"
          max="50"
          value={props.padding}
          onChange={(e) =>
            setProp((props) => (props.padding = parseInt(e.target.value, 10)))
          }
          className="w-full"
        />
        <p className="text-sm">Padding: {props.padding}px</p>
      </div>
    </div>
  );
};

Container.craft = {
  related: {
    settings: ContainerSettings,
  },
};
