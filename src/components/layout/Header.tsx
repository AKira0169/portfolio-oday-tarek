import { NavLink } from "react-router";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <header className="flex items-center justify-end py-4">
          <nav className="space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/works">Works</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;
