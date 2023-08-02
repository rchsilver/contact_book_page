import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const userReq = () => {
  const userContext = useContext(UserContext);

  return userContext;
};

export { userReq };
