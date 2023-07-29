import { ReactNode, createContext } from "react";
import { loginData } from "../interfaces/LoginTypes";

type TAuthProvidersProps = {
  children: ReactNode;
};

type TAuthContextValues = {
  signIn: (data: loginData) => void;
};

const AuthContext = createContext({});

const AuthProviders = ({ children }: TAuthProvidersProps) => {
  const signIn = async (data: loginData) => {};
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProviders };
