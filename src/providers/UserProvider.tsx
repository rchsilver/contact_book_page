import { ReactNode, createContext } from "react";
import { api } from "../service/api";
import { registerData } from "../interfaces/RegisterTypes";

type TUserProvidersProps = {
  children: ReactNode;
};

type TContextValue = {
  updateContact: (data: registerData) => Promise<void>;
};

const UserContext = createContext({} as TContextValue);

const UserProviders = ({ children }: TUserProvidersProps) => {
  const updateContact = async (data: registerData) => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      const id = localStorage.getItem("@contactfile:id");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      await api.patch(`/contacts/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UserContext.Provider value={{ updateContact }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProviders };
