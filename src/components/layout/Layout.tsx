import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Page container */}
      <div className="container mx-auto flex min-h-screen flex-col">
        <main className="flex-1 p-10">
          <Outlet />
        </main>
      </div>
      {/* Floating Dock */}
      <Header />
    </div>
  );
};

export default Layout;
