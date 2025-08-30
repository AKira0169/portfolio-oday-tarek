import BubbleMenu from "../../blocks/Components/BubbleMenu/BubbleMenu";

const MobileHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 md:hidden">
      <BubbleMenu
        logo="/oday_tarek_logo_ot_fixed.svg"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Works",
            href: "/works",
          },
          {
            label: "Contact",
            href: "/contact",
          },
        ]}
      />
    </header>
  );
};

export default MobileHeader;
