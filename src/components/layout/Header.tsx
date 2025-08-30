import { NavLink } from "react-router";
import MobileHeader from "./MobileHeader";
import PillNav from "../../blocks/Components/PillNav/PillNav";

const Header = () => {
  return (
    <>
      <PillNav
        logo="/logo.png"
        items={[
          { label: "Home", href: "/" },

          { label: "About", href: "/about" },

          { label: "Services", href: "/services" },

          { label: "Contact", href: "/contact" },
        ]}
      />
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
