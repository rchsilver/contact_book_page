import { ReactNode, createContext, useState } from "react";
import { api } from "../service/api";
import { TContact, TContactRequest } from "../interfaces/ContactTypes";

type TContactProvidersProps = {
  children: ReactNode;
};

type TContextValue = {
  createContact: (data: TContactRequest) => Promise<void>;
  contact: TContact | undefined;
};

const ContactContext = createContext({} as TContextValue);

const ContactProviders = ({ children }: TContactProvidersProps) => {
  const [contact, setContact] = useState<TContact>();

  const createContact = async (data: TContactRequest) => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      // const response = await api.post("/contacts", data, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      const response = await api.post("/contacts", data);

      setContact(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactContext.Provider value={{ createContact, contact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProviders };
