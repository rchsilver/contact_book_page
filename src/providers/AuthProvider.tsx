import { ReactNode, createContext, useEffect, useState } from "react";
import { loginData } from "../interfaces/LoginTypes";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { registerData } from "../interfaces/RegisterTypes";

type TAuthProvidersProps = {
  children: ReactNode;
};

type TAuthContextValues = {
  signIn: (data: loginData) => Promise<void>;
  registerClient: (data: registerData) => Promise<void>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const AuthContext = createContext({} as TAuthContextValues);

const AuthProviders = ({ children }: TAuthProvidersProps) => {
  const navigate = useNavigate();
  const [page, setPage] = useState<string>("home");

  useEffect(() => {
    const token = localStorage.getItem("@contactfile:token");
    if (!token) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  const signIn = async (data: loginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      const { id } = response.data;
      console.log(token);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("@contactfile:token", token);
      localStorage.setItem("@contactfile:id", id);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const registerClient = async (data: registerData) => {
    try {
      await api.post("/clients", data);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, registerClient, page, setPage }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviders };
