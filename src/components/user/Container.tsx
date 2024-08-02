// components/user/Container.tsx
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
      className={`my-1 bg-[${background}] rounded-lg shadow-md`}
      style={{ padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};
