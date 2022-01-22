import { Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import CommunityContext from "../React/Contexts/CommunityContext";
import UserContext from "../React/Contexts/UserContext";

export const InvitationPage = () => {
  const user = useContext(UserContext);
  const community = useContext(CommunityContext);
  return (
    <div className={`w-full h-full flex flex-row p-8`}>
      <div
        className={`dark:text-transparent font-inter text-3xl drop-shadow-md animate-gradient-slow !bg-clip-text w-full`}
      >
        School Minigames
        {user && community && ` - ${community.name}`}
      </div>
    </div>
  );
};
export default InvitationPage;
