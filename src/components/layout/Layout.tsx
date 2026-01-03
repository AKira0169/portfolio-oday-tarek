import { Outlet } from "react-router-dom";
import Header from "./Header";
import Particles from "../../blocks/Backgrounds/Particles/Particles";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#aa99ff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Page container */}
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col">
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
