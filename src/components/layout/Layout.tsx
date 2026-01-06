import { Outlet } from "react-router-dom";
import Header from "./Header";
import MeshGradient from "../MeshGradient";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 z-0">
        <MeshGradient />
      </div>
      {/* Page container */}
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col">
        <main className="flex-1 p-6 md:p-10">
          <Outlet />
        </main>
      </div>
      {/* Floating Dock */}
      <Header />
    </div>
  );
};

export default Layout;
