import React from "react";

export const Toolbox = () => {
  return (
    <div className="px-2 py-2">
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="pb-2">
          <p>Drag to add</p>
        </div>
        <div className="flex flex-col">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Button
          </button>
        </div>
        <div className="flex flex-col">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Text
          </button>
        </div>
        <div className="flex flex-col">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Container
          </button>
        </div>
        <div className="flex flex-col">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Card
          </button>
        </div>
      </div>
    </div>
  );
};
