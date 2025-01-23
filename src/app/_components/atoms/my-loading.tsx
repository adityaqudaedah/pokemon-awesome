import React from "react";

interface ILoading {
  message: string;
}
const MyLoading: React.FC<ILoading> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white-500"></div>
      <p className="mt-4 text-lg text-white-500">{props.message}</p>
    </div>
  );
};

export default MyLoading;
