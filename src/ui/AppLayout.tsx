import Header from "./Header";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr] gap-32">
      <Header />
      <main className="flex flex-col items-center justify-center gap-56">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
