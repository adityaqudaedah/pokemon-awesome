import React from "react";
import Brand from "@/_components/atoms/brand";
import Avatar from "@/_components/atoms/avatar";

const NavLink = () => {
  return (
    <nav className="w-screen flex flex-row justify-between p-6 shadow-lg bg-main-darken">
      {/* brand */}
      <Brand />
      {/* avatar */}
      <Avatar />
    </nav>
  );
};

export default NavLink;
