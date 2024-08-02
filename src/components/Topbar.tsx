import React from "react";

export const Topbar = () => {
  return (
    <div className="px-2 py-1 mt-6 mb-2 bg-[#cbe8e7]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" checked readOnly />
            <span className="ml-2">Enable</span>
          </label>
        </div>
        <div>
          <button className="px-4 py-1 text-sm font-medium border border-secondary rounded-md hover:bg-gray-200">
            Serialize JSON to console
          </button>
        </div>
      </div>
    </div>
  );
};
