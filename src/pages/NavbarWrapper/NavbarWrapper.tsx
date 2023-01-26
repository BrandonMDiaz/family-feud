import React from "react";
import * as GlobalStyles from "../../common/styles/global";

import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function NavbarWrapper() {
  return (
    <GlobalStyles.Container>
      <Navbar></Navbar>
      <Outlet />
    </GlobalStyles.Container>
  );
}

export default NavbarWrapper;
