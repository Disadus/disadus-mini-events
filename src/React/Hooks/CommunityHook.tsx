import {
  Community,
  User,
} from "@Disadus/disadus-plugin-api/dist/types/DisadusTypes";
import { useEffect, useState } from "react";
import APIClient from "../../Global/APIClient";

export const useCommunity = (communityID?: string) => {
  const [community, setCommunity] = useState(null as null | Community);
  useEffect(() => {
    if (!communityID) return setCommunity(null);
    APIClient.getCommunity(communityID).then((response) => {
      setCommunity(response.data);
    });
  }, [communityID]);
  return community;
};
