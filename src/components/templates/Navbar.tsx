import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";

const NavbarSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="">
      <div></div>
    </div>
  );
};

interface NavbarProps {
  title?: string;
  item1?: string;
  item2?: string;
  item3?: string;
  buttonText?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  title = "fibr.ai",
  item1 = "Products",
  item2 = "Resources",
  item3 = "Pricing",
  buttonText = "Get Started",
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  const [editableTitle, setEditableTitle] = useState(title);
  const [editableItem1, setEditableItem1] = useState(item1);
  const [editableItem2, setEditableItem2] = useState(item2);
  const [editableItem3, setEditableItem3] = useState(item3);
  const [editableButtonText, setEditableButtonText] = useState(buttonText);

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="navbar bg-base-100 border border-b-slate-800"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <ContentEditable
                html={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                tagName="a"
                className="btn btn-ghost text-lg"
                onBlur={() => setProp((props) => (props.title = editableTitle))}
              />
            </li>
            <li>
              <ContentEditable
                html={editableItem1}
                onChange={(e) => setEditableItem1(e.target.value)}
                tagName="a"
                className="btn btn-ghost text-lg"
                onBlur={() => setProp((props) => (props.item1 = editableItem1))}
              />
            </li>
            <li>
              <ContentEditable
                html={editableItem2}
                onChange={(e) => setEditableItem2(e.target.value)}
                tagName="a"
                className="btn btn-ghost text-lg"
                onBlur={() => setProp((props) => (props.item2 = editableItem2))}
              />
            </li>
            <li>
              <ContentEditable
                html={editableItem3}
                onChange={(e) => setEditableItem3(e.target.value)}
                tagName="a"
                className="btn btn-ghost text-lg"
                onBlur={() => setProp((props) => (props.item3 = editableItem3))}
              />
            </li>
          </ul>
        </div>
        <ContentEditable
          html={editableTitle}
          onChange={(e) => setEditableTitle(e.target.value)}
          tagName="a"
          className="btn btn-ghost text-lg"
          onBlur={() => setProp((props) => (props.title = editableTitle))}
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ContentEditable
              html={editableItem1}
              onChange={(e) => setEditableItem1(e.target.value)}
              tagName="a"
              className="btn btn-ghost text-lg"
              onBlur={() => setProp((props) => (props.item1 = editableItem1))}
            />
          </li>
          <li>
            <ContentEditable
              html={editableItem2}
              onChange={(e) => setEditableItem2(e.target.value)}
              tagName="a"
              className="btn btn-ghost text-lg"
              onBlur={() => setProp((props) => (props.item2 = editableItem2))}
            />
          </li>
          <li>
            <ContentEditable
              html={editableItem3}
              onChange={(e) => setEditableItem3(e.target.value)}
              tagName="a"
              className="btn btn-ghost text-lg"
              onBlur={() => setProp((props) => (props.item3 = editableItem3))}
            />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ContentEditable
          html={editableButtonText}
          onChange={(e) => setEditableButtonText(e.target.value)}
          tagName="a"
          className="btn btn-md bg-[#f25816] border-black rounded-full"
          onBlur={() =>
            setProp((props) => (props.buttonText = editableButtonText))
          }
        />
      </div>
    </div>
  );
};

Navbar.craft = {
  props: {
    title: "fibr.ai",
  },
  related: {
    settings: NavbarSettings,
  },
};

export default Navbar;
