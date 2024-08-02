"use client";

import React from "react";
import { useEditor } from "@craftjs/core";

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  return selected ? (
    <div className="bg-gray-100 mt-2 p-2 rounded-lg">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between pb-2 border-b">
          <h2 className="text-sm font-semibold">Selected</h2>
          <span className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded">
            {selected.name}
          </span>
        </div>
        {selected.settings && React.createElement(selected.settings)}
        {selected.isDeletable && (
          <button
            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  ) : null;
};
