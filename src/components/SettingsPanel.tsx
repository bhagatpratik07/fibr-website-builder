// components/SettingsPanel.tsx
import React from "react";

export const SettingsPanel = () => {
  return (
    <div className="bg-gray-100 mt-2 px-2 py-2">
      <div className="space-y-2">
        <div className="pb-2">
          <div className="flex items-center">
            <div className="flex-grow">
              <h2 className="text-lg font-medium">Selected</h2>
            </div>
            <div>
              <span className="inline-block px-2 py-1 text-sm text-white bg-blue-500 rounded">
                Selected
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <label className="text-sm font-medium">Prop</label>
            <input
              type="range"
              className="w-full"
              defaultValue={0}
              step={1}
              min={7}
              max={50}
            />
          </div>
          <button className="px-4 py-2 text-white bg-gray-500 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
