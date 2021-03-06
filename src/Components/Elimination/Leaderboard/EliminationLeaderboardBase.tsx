import { useEliminationLeaderboard } from "../../../Helpers/Hooks/Elimination/EliminationLeaderboardHook";
import { EliminationLeaderboardEntryViewer } from "./LeaderboardEntry";

export const EliminationLeaderboard = (props: { gameID?: string }) => {
  const leaderboard = useEliminationLeaderboard(props.gameID);
  return (
    <div className={`w-128 1.5xl:w-104 max-w-[100vw] h-full lg:p-0 flex-grow-0`}>
      <div
        className={`w-full h-full flex flex-col gap-4 bg-gray-200 dark:bg-gray-900 p-4`}
      >
        {leaderboard &&
          leaderboard.map((userData, index) => (
            <EliminationLeaderboardEntryViewer
              userData={userData}
              gameID={props.gameID!}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};
export default EliminationLeaderboard;
