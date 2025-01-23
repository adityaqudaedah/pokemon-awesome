import React from "react";

const SideBar = () => {
  return (
    <aside className="bg-transparent min-h-screen flex flex-col justify-between p-4">
      {/* Top Section */}
      <div>
        <div className="flex items-center space-x-2 text-white">
          {/* Icon */}
          <span className="text-lg text-white font-semibolds">Pokemon - List</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
