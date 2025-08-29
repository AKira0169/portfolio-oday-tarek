import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <header className="flex items-center justify-end py-4">
          <nav className="space-x-8">
            <a href="#" className="font-medium text-gray-800">
              Works
            </a>
            <a href="#" className="font-medium text-gray-800">
              Blog
            </a>
            <a href="#" className="font-medium text-gray-800">
              Contact
            </a>
          </nav>
        </header>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;
