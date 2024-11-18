import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto] gap-32">
      <Header />
      <main className="flex flex-col items-center gap-56">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
