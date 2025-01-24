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
  setUser: () => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(true)
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
      console.log("executed1")
    }
  }, [router]);

  useEffect(() => {
    if (!isAuthenticated && !user?.authorized && user?.username === "") {
      console.log("executed2")
      router.push("/auth");
    } 
    setIsRedirecting(false)
  }, [router, isAuthenticated, user]);

  if (isRedirecting) {
    return <MyLoading message="Redirecting..." />;
  }

  // if (!isAuthenticated && isLoaded && !user) {
  //   router.push("/auth");
  // }

  console.log(isAuthenticated)
  console.log(user)

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        setUser,
      }}
    >
      {!isRedirecting && props.children}
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
