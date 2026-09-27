// Layout.jsx
import { Outlet } from "react-router";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />

      <div
        className="d-flex flex-column bg-warning-subtle vh-100 justify-content-center
      align-items-center"
      >
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
