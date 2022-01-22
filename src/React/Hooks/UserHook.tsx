import { PublicUser } from "@Disadus/disadus-plugin-api/dist/types/DisadusTypes";
import { useEffect, useState } from "react";
import APIClient from "../../Global/APIClient";

export const useUser = (id: string) => {
  const [user, setuser] = useState(null as null | PublicUser);
  useEffect(() => {
    if (!id) return;
    APIClient.getUser(id).then((response) => {
      setuser(response.data);
    });
  }, [id]);
  return user;
};
