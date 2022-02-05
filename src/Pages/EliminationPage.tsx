import { Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { useParams } from "react-router";
import { EliminationInfoboard } from "../Components/Elimination/EliminationInfoboard";
import { EliminationKillFeedBase } from "../Components/Elimination/KillFeed/EliminationKillFeedBase";
import EliminationLeaderboard from "../Components/Elimination/Leaderboard/EliminationLeaderboardBase";
import CommunityContext from "../Helpers/Contexts/CommunityContext";
import UserContext from "../Helpers/Contexts/UserContext";
import { useMinigame } from "../Helpers/Hooks/MinigameHook";

export const EliminationPage = () => {
  const user = useContext(UserContext);
  const community = useContext(CommunityContext);
  const query = useParams();
  const gameID = query.id;
  const minigame = useMinigame(gameID);
  return (
    <div className={`w-full h-full flex flex-row`}>
      <div className={`flex-grow flex flex-col relative`}>
        <div
          className={`absolute top-0 left-0 w-full h-full p-8 overflow-auto flex flex-col gap-8`}
        >
          {" "}
          <EliminationInfoboard game={minigame || undefined} />
          <EliminationKillFeedBase gameID={gameID} />
        </div>
        {/* <div
        className={`dark:text- font-inter text-3xl drop-shadow-md animate-gradient-slow !bg-clip-text w-full`}
      >
        Elimination
        {user && community && ` - ${community.name} `}
        {JSON.stringify(minigame)}
       
      </div> */}
      </div>
      <EliminationLeaderboard gameID={gameID} />
    </div>
  );
};
export default EliminationPage;
