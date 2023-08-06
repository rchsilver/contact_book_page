import { ReactNode, createContext, useState } from "react";
import { api } from "../service/api";
import { updateUser, updateUserReq } from "../interfaces/RegisterTypes";
import { useNavigate } from "react-router-dom";

type TUserProvidersProps = {
  children: ReactNode;
};

type TContextValue = {
  updateUser: (data: updateUserReq) => Promise<void>;
  deleteUser: () => Promise<void>;
  openUpdateUser: boolean;
  setOpenUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  getUser: () => Promise<void>;
  user: updateUser | undefined | null;
  setUser: React.Dispatch<React.SetStateAction<updateUser | undefined | null>>;
};

const UserContext = createContext({} as TContextValue);

const UserProviders = ({ children }: TUserProvidersProps) => {
  const [openUpdateUser, setOpenUpdateUser] = useState<boolean>(false);
  const [user, setUser] = useState<updateUser | null>();
  const navigate = useNavigate();

  const updateUser = async (data: updateUserReq) => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      const id = localStorage.getItem("@contactfile:id");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      const response = await api.patch(`/clients/${id}`, data);
      setOpenUpdateUser(!openUpdateUser);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async () => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      const id = localStorage.getItem("@contactfile:id");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await api.delete(`/clients/${id}`);

      localStorage.removeItem("@contactfile:token");
      localStorage.removeItem("@contactfile:id");

      setOpenUpdateUser(!openUpdateUser);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      const id = localStorage.getItem("@contactfile:id");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      const response = await api.get(`/clients/${id}`);

      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        updateUser,
        deleteUser,
        openUpdateUser,
        setOpenUpdateUser,
        getUser,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProviders };
