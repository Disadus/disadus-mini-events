import { Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import CommunityContext from "../Helpers/Contexts/CommunityContext";
import UserContext from "../Helpers/Contexts/UserContext";

export const MainPage = () => {
  const user = useContext(UserContext);
  const community = useContext(CommunityContext);
  const nav = useNavigate();
  const loc = useLocation()
  useEffect(()=>{
    const navLoc = localStorage.getItem('gameNav')
    if (navLoc) nav(navLoc)
  },[loc])
  return (
    <div className={`w-full h-full flex flex-row p-8`}>
      <div
        className={`dark:text- font-inter text-3xl drop-shadow-md animate-gradient-slow !bg-clip-text w-full`}
      >
        School Minigames
        {user && community && ` - ${community.name} `}
      </div>
    </div>
  );
};
export default MainPage;
