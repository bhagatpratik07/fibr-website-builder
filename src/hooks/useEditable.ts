import { useState } from "react";
import { useNode } from "@craftjs/core";

interface EditableProps {
  property: string;
  initialValue: string;
}

const useEditable = ({ property, initialValue }: EditableProps) => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const [value, setValue] = useState(props[property] || initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setValue(e.currentTarget.innerHTML);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setProp((props) => (props[property] = value));
    }
  };

  return {
    value,
    setValue,
    handleChange,
    handleKeyDown,
  };
};

export default useEditable;
