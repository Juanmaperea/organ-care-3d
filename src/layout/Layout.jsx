/* eslint-disable react/prop-types */
import "./Layout.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
        <main className="layout-content">
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
