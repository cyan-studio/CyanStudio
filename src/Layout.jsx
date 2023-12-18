import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/Navbar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
