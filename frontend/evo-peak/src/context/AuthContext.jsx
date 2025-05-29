import { createContext, useContext, useState, useEffect } from "react";
const API = "http://localhost:4000/api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authCokie, setAuthCokie] = useState(null);

  const Login = async (email, password) => {
    try {
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Authentication error");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify({ email }));
      setAuthCokie(data.token);
      setUser({ email });

      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setAuthCokie(null);
    setUser(null);
  };

  // En useEffect
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("user");
    if (token) {
      setAuthCokie(token);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, Login, logout, authCokie, setAuthCokie, API }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

