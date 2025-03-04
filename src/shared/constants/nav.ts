type NavItem = {
  img: string;
  title: string;
  isDesktopOnly?: boolean;
  isMobileOnly?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  {
    img: "/src/assets/nav/home.svg",
    title: "HOME",
  },
  {
    img: "/src/assets/nav/pin.svg",
    title: "NEARBY",
  },
  {
    img: "/src/assets/nav/bottom-plus.svg",
    title: "-",
    isMobileOnly: true,
  },
  {
    img: "/src/assets/nav/chat.svg",
    title: "CONNECT",
  },
  {
    img: "/src/assets/nav/account.svg",
    title: "ME",
  },
  {
    img: "/src/assets/nav/plus.svg",
    title: "ADD A CARD",
    isDesktopOnly: true,
  },
] as const;
