import { Outlet } from "react-router-dom";
import Header from "./Header";
import Particles from "../../blocks/Backgrounds/Particles/Particles";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Particles full background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#000000", "#000000"]}
          particleCount={300}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

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
