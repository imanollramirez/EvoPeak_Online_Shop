import React, { createContext, useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext(null);
export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authCookie, setAuthCookie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const API_URL = "http://localhost:4000/api";
  const navigate = useNavigate();

  const clearSession = () => {
    localStorage.removeItem("token");
    Cookies.remove("authToken", { path: '/' });
    setUser(null);
    setAuthCookie(null);
    setIsLoggedIn(false);
  };

  const logout = useCallback(() => {
    const logoutUser = async () => {
      try {
        await fetch(`${API_URL}/logout`, {
          method: "POST",
          credentials: "include",
        });
      } catch (error) {
        console.error("Error during logout:", error);
      } finally {
        clearSession();
        navigate("/");
      }
    };

    logoutUser();
  }, [API_URL, navigate]);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        Cookies.set("authToken", data.token, { path: '/' });
        setAuthCookie(data.token);
        setUser(data.user);
        setIsLoggedIn(true);
        navigate("/welcome");
        console.log(user.name)
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const cookieToken = Cookies.get("authToken");

        if (token || cookieToken) {
          const response = await fetch(`${API_URL}/products`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token || cookieToken}`,
            },
            credentials: "include",
          });

          if (response.ok) {
            try {
              const tokenParts = (token || cookieToken).split(".");
              if (tokenParts.length === 3) {
                const payload = JSON.parse(atob(tokenParts[1]));
                setUser({
                  id: payload.id,
                  userType: payload.userType,
                  name: payload.name
                });
                setAuthCookie(token || cookieToken);
                setIsLoggedIn(true);
              }
            } catch (e) {
              console.error("Error decoding token:", e);
              clearSession();
            }
          } else {
            clearSession();
          }
        } else {
          clearSession();
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        clearSession();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authCookie,
        loading,
        login,
        logout,
        isLoggedIn,
        API: API_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
