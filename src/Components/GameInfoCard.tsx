import { BiTargetLock } from "react-icons/bi";
import { MinigameType } from "../Types/MinigameTypes";
import { ClockIcon, CogIcon, EyeIcon, UserAddIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
export const GameInfoCard = (props: { game: MinigameType }) => {
  const { game } = props;
  const navigate = useNavigate();
  let IconType;
  let gameName;
  switch (game?.game) {
    case "elimination":
      IconType = BiTargetLock;
      gameName = "Elimination";
      break;
    default:
      IconType = null;
  }
  return (
    <div
      className={`p-4 dark:bg-gray-700 bg-white shadow-sm w-full h-48 flex-shrink-0 rounded-lg flex flex-col gap-2`}
    >
      <div className={`text-lg`}>{game?.name}</div>
      {IconType && (
        <div className={`flex flex-row gap-2 text-sm items-center`}>
          Game Type
          <div
            className={`flex flex-row gap-2 text-base items-center dark:text-primary-300 text-primary-300`}
          >
            <IconType className={`w-4 h-4`} />
            {gameName}
          </div>
        </div>
      )}
      <div className={`flex flex-col flex-grow justify-end gap-2`}>
        <div className={`flex flex-row gap-4`}>
          <div className={`group relative z-10`}>
            {(game.start || 0) < Date.now() || game.participating ? (
              <>
                <button
                  className={` flex-shrink-0 rounded-lg p-2 border-emerald-400 border-2 text-emerald-400 hover:bg-emerald-600 hover:bg-opacity-75 transition-all dark:hover:text-white`}
                  onClick={() => {
                    navigate(`/game/${game.game}/${game.id}`);
                    localStorage.setItem(
                      "gameNav",
                      `/game/${game.game}/${game.id}`
                    );
                  }}
                >
                  <EyeIcon className={`w-4 h-4`} />
                </button>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 translate-x-full right-0 opacity-0 pointer-events-none group-hover:opacity-100 pl-2 transition-all duration-300`}
                >
                  <div
                    className={`bg-gray-800 p-1.5 rounded-default flex flex-row whitespace-nowrap px-3 text-white`}
                  >
                    View Event
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  className={` flex-shrink-0 rounded-lg p-2 border-emerald-400 border-2 text-emerald-400 hover:bg-emerald-600 hover:bg-opacity-75 transition-all dark:hover:text-white`}
                  onClick={() => {
                    navigate(`/game/${game.game}/${game.id}`);
                    localStorage.setItem(
                      "gameNav",
                      `/game/${game.game}/${game.id}`
                    );
                  }}
                >
                  <UserAddIcon className={`w-4 h-4`} />
                </button>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 translate-x-full right-0 opacity-0 pointer-events-none group-hover:opacity-100 pl-2 transition-all duration-300`}
                >
                  <div
                    className={`bg-gray-800 p-1.5 rounded-default flex flex-row whitespace-nowrap px-3 text-white`}
                  >
                    Join
                  </div>
                </div>
              </>
            )}
          </div>
          <div className={`group relative`}>
            <button
              className={` flex-shrink-0 rounded-lg p-2 border-yellow-400 border-2 text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-75 transition-all dark:hover:text-white`}
              onClick={() => {
                navigate(`/game/${game.game}/${game.id}`);
                localStorage.setItem(
                  "gameNav",
                  `/game/${game.game}/${game.id}`
                );
              }}
            >
              <CogIcon className={`w-4 h-4`} />
            </button>
            <div
              className={`absolute top-1/2 -translate-y-1/2 translate-x-full right-0 opacity-0 pointer-events-none group-hover:opacity-100 pl-2 transition-all duration-300 z-20`}
            >
              <div
                className={`bg-gray-800 p-1.5 rounded-default flex flex-row whitespace-nowrap px-3 text-white`}
              >
                Settings
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-col gap-2 justify-end`}>
          <div
            className={`flex flex-row gap-2 text-sm items-center dark:text-gray-350`}
          >
            <ClockIcon className={`w-4 h-4`} />
            {game?.start
              ? `Started on ${dayjs(game?.start).format(
                  "MM/DD/YYYY"
                )} at ${dayjs(game?.start).format("h:mm A")}`
              : `Waiting for admin to start game`}
          </div>
          <div
            className={`flex flex-row gap-2 text-sm items-center dark:text-gray-350`}
          >
            <ClockIcon className={`w-4 h-4`} />
            Ends on {dayjs(game?.end).format("MM/DD/YYYY")} at{" "}
            {dayjs(game?.end).format("h:mm A")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfoCard;
