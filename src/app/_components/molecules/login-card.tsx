import React from "react";

const Card: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex max-w-1/2 rounded-lg shadow-lg overflow-auto bg-main-darken p-8">
      {children}
    </div>
  );
};

export default Card;
