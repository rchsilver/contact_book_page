import { ReactNode, createContext } from "react";
import { loginData } from "../interfaces/LoginTypes";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";

type TAuthProvidersProps = {
  children: ReactNode;
};

type TAuthContextValues = {
  signIn: (data: loginData) => Promise<void>;
};

const AuthContext = createContext({} as TAuthContextValues);

const AuthProviders = ({ children }: TAuthProvidersProps) => {
  const navigate = useNavigate();

  const signIn = async (data: loginData) => {
    const response = await api.post("/login", data);

    const token = response.data;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    navigate("dashboard");
  };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProviders };
