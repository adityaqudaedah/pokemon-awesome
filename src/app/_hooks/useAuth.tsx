"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { User, type Auth } from "@/_libs/types";
import MyLoading from "@/_components/atoms/my-loading";
import { useRouter } from "next/navigation";

const AuthContext = createContext<Auth>({
  isAuthenticated: false,
  user: { username: "", authorized: false },
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const [user, setUser] = useState<User>({
    username: "",
    authorized: false,
  });

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const ls = JSON.parse(auth || "{}") || null;
    if (ls) {
      setUser(ls.user);
      setIsAuthenticated(ls.isAuthenticated);
      setisLoaded(true);
    }
    else {
      router.push("/auth");
    }
  }, []);

  if (!isLoaded) {
    return <MyLoading message="Redirecting..." />;
  }

  // if (!isAuthenticated && isLoaded && !user) {
  //   router.push("/auth");
  // }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {isLoaded && props.children}
    </AuthContext.Provider>
  );
};
const useAuth = (): Auth => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
