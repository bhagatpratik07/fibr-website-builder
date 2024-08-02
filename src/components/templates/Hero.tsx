import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";

const HeroSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return <div className="">{/* Add settings UI here */}</div>;
};

const Hero: React.FC = () => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    props = {},
  } = useNode();

  const [editableHeading, setEditableHeading] = useState(
    props.heading || "Create landing pages the same way you create Ads"
  );
  const [editableParagraph, setEditableParagraph] = useState(
    props.paragraph ||
      "Convert more traffic & reduce CAC by optimising your post-click experience. Experiment & publish 1000s of AI-tailored landing pages - all without changing your CMS"
  );
  const [editableButtonText, setEditableButtonText] = useState(
    props.buttonText || "Get Started"
  );
  const [editableHeaderText, setEditableHeaderText] = useState(
    props.headerText || "AI-POWERED PERSONALIZATION PLATFORM"
  );

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    prop: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setter(e.currentTarget.innerHTML); // Save the content
      setProp((props) => (props[prop] = e.currentTarget.innerHTML)); // Update the Craft.js prop
    }
  };

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <button className="btn w-96 p-0 mb-6 font-medium text-xs font-serifs bg-[#fdeea0] border-double border-black hover:bg-[#fdeea0]">
              <ContentEditable
                html={editableHeaderText}
                onChange={(e) => setEditableHeaderText(e.target.value)}
                tagName="div" // Use a div instead of h1 here
                className=""
                onKeyDown={(e) =>
                  handleKeyDown(e, setEditableHeaderText, "headerText")
                }
              />
            </button>
            <h1 className="text-5xl font-bold">
              <ContentEditable
                html={editableHeading}
                onChange={(e) => setEditableHeading(e.target.value)}
                tagName="div" // Use a div instead of h1 here
                className="text-5xl font-bold"
                onKeyDown={(e) =>
                  handleKeyDown(e, setEditableHeading, "heading")
                }
              />
            </h1>
            <div className="py-6">
              <ContentEditable
                html={editableParagraph}
                onChange={(e) => setEditableParagraph(e.target.value)}
                tagName="div" // Use a div instead of p here
                className="py-6"
                onKeyDown={(e) =>
                  handleKeyDown(e, setEditableParagraph, "paragraph")
                }
              />
            </div>
            <button className="btn btn-primary">
              <ContentEditable
                html={editableButtonText}
                onChange={(e) => setEditableButtonText(e.target.value)}
                tagName="span" // Use a div instead of span here
                className="border-none"
                onKeyDown={(e) =>
                  handleKeyDown(e, setEditableButtonText, "buttonText")
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.craft = {
  props: {
    heading: "Create landing pages the same way you create Ads",
    paragraph:
      "Convert more traffic & reduce CAC by optimising your post-click experience. Experiment & publish 1000s of AI-tailored landing pages - all without changing your CMS",
    buttonText: "Get Started",
    headerText: "AI-POWERED PERSONALIZATION PLATFORM",
  },
  related: {
    settings: HeroSettings,
  },
};

export default Hero;
