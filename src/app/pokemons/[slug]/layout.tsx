"use client";

import React from "react";
import NavLink from "@/_components/molecules/nav-link";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* nav-link */}
      <NavLink />

      {/* content */}
      {children}
    </div>
  );
};

export default Layout;
