import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <main className="p-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
