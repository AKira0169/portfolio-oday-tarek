import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      <Header />
      <main className="container flex flex-col justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
