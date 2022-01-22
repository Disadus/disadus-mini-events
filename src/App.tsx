import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CommunityContextProvider } from "./React/Contexts/CommunityContext";
import UserContext, { UserContextProvider } from "./React/Contexts/UserContext";
import { useCommunity } from "./React/Hooks/CommunityHook";
import { useCurrentUser } from "./React/Hooks/CurrentUserHook";
const MainPage = lazy(() => import("./Pages/MainPage"));
export const App = () => {
  const currentUser = useCurrentUser();
  const currentCommunity = useCommunity(currentUser?.primaryCommunity);
  useEffect(() => {
    const func = (ev: MessageEvent<any>) => {
      console.log(ev.data);
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
    <div className={`${currentUser?.theme && `dark`}`}>
      <UserContextProvider value={currentUser}>
        <CommunityContextProvider value={currentCommunity}>
          <Suspense fallback>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainPage />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </CommunityContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
