import { NavLink, useLocation } from "react-router";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const location = useLocation();
  // Custom NavLink styling function to handle active state
  const navLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return `relative px-4 py-2 font-medium text-base transition-all duration-300 ease-in-out group ${isActive ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"}`;
  };

  return (
    <>
      <div className="hidden md:block">
        <header className="bg-background/80 fixed top-0 right-0 left-0 z-[1002] flex w-full items-center justify-end px-8 py-6 shadow-sm backdrop-blur-md">
          <nav className="flex items-center space-x-6">
            <NavLink to="/" className={navLinkClasses}>
              <span className="relative z-10">Home</span>
              <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span
                className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out data-[active]:scale-x-100"
                data-active={location.pathname === "/" ? "true" : undefined}
              ></span>
            </NavLink>
            <NavLink to="/works" className={navLinkClasses}>
              <span className="relative z-10">Works</span>
              <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span
                className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out data-[active]:scale-x-100"
                data-active={
                  location.pathname === "/works" ? "true" : undefined
                }
              ></span>
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              <span className="relative z-10">Contact</span>
              <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span
                className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out data-[active]:scale-x-100"
                data-active={
                  location.pathname === "/contact" ? "true" : undefined
                }
              ></span>
            </NavLink>
          </nav>
        </header>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;
