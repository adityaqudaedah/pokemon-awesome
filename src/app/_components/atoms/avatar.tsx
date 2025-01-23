import { useAuth } from "@/_hooks/useAuth";
import { capitalize } from "@/_libs/helper";
import { useRouter } from "next/navigation";
import React from "react";

const Avatar = () => {
  const router = useRouter()
  const { user, logout } = useAuth();
  const handleClick = () => {
    localStorage.clear();
    logout();
    router.push("/auth")
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center space-x-2 hover:cursor-pointer hover:bg-gray-700 rounded border p-4"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white border">
        {user.username.charAt(0).toUpperCase()}
      </div>

      <span className="text-white font-semibold">
        {capitalize(user.username)}
      </span>
    </div>
  );
};

export default Avatar;
