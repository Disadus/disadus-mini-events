import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GamesSidebar } from "./Components/Sidebar";
import { CommunityContextProvider } from "./Helpers/Contexts/CommunityContext";
import UserContext, {
  UserContextProvider,
} from "./Helpers/Contexts/UserContext";
import { useCommunity } from "./Helpers/Hooks/CommunityHook";
import { useCurrentUser } from "./Helpers/Hooks/CurrentUserHook";
import EliminationPage from "./Pages/EliminationPage";
const MainPage = lazy(() => import("./Pages/MainPage"));
export const App = () => {
  const currentUser = useCurrentUser();
  const currentCommunity = useCommunity(currentUser?.primaryCommunity);
  useEffect(() => {
    const func = (ev: MessageEvent<any>) => {
      console.log(ev.data, ev.origin);
    };
    console.log("add");
    // window.top.postMessage
    window.addEventListener("message", func);
    return () => {
      console.log("remove");
      window.removeEventListener("message", func);
    };
  }, []);
  return (
    <div className={`${currentUser?.theme && `dark`} w-full h-full relative`} id="themeContainer">
      <div
        className={`dark:text-white w-full h-full flex flex-row dark:bg-gray-850 bg-gray-150`}
      >
        <UserContextProvider value={currentUser}>
          <CommunityContextProvider value={currentCommunity}>
            <BrowserRouter>
              <GamesSidebar />
              <Suspense fallback>
                <div
                  className={`flex flex-grow break-words whitespace-pre-wrap relative`}
                >
                  <div className={`w-full h-full absolute top-0 left-0`}>
                    <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route
                        path="/game/elimination/:id"
                        element={<EliminationPage />}
                      />
                      <Route path="*" element={<div>404</div>} />
                    </Routes>
                  </div>
                </div>
              </Suspense>
            </BrowserRouter>
          </CommunityContextProvider>
        </UserContextProvider>
      </div>
    </div>
  );
};

export default App;
