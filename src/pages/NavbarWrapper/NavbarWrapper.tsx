import React from "react";
import * as GlobalStyles from "../../common/styles/global";
import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import GameContextProvider from "../../hooks/GameContextProvider";

function NavbarWrapper() {
  const location = useLocation();
  const displayNavbar = () => {
    if (location.pathname !== "/jugar") {
      return <Navbar></Navbar>;
    }
    return null;
  };
  return (
    <GlobalStyles.Container>
      {displayNavbar()}
      <GameContextProvider>
        <Outlet />
      </GameContextProvider>
    </GlobalStyles.Container>
  );
}

export default NavbarWrapper;
