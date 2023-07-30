import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TContacts } from "../../interfaces/ContactTypes";
import { DashboardStyled } from "./DashboardStyled";
import { api } from "../../service/api";
import { Carousel } from "../../components/Carousel/Carousel";

const Dashboard = () => {
  const [contacts, setContacts] = useState<TContacts>([]);

  useEffect(() => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      const id = localStorage.getItem("@contactfile:id");
      (async () => {
        const response = await api.get<TContacts>(`contacts/get/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setContacts(response.data);
        console.log(contacts);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <DashboardStyled>
      <Header />
      <Carousel contacts={contacts} />
    </DashboardStyled>
  );
};

export { Dashboard };
