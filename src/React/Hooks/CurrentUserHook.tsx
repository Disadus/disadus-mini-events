import { User } from "@Disadus/disadus-plugin-api/dist/types/DisadusTypes";
import { useEffect, useState } from "react";
import APIClient from "../../Global/APIClient";

export const useCurrentUser = () => {
  const [user, setuser] = useState(null as null | User);
  useEffect(() => {
    APIClient.getSelf().then((response) => {
      setuser(response.data);
    });
  }, []);
  return user;
};
