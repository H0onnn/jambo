import { NAV_ITEMS } from "@/shared/constants/nav";

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md md:hidden">
      <ul className="flex items-center justify-between h-16">
        {NAV_ITEMS.filter((item) => !item.isDesktopOnly).map((item) => (
          <li key={item.title} className="flex flex-1 flex-col items-center justify-center h-full">
            {item.isMobileOnly ? (
              <button className="w-11 h-11 rounded-full flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-11 h-11"
                  aria-label={item.title}
                />
              </button>
            ) : (
              <button className="flex flex-col items-center justify-center">
                <img src={item.img} alt={item.title} className="w-6 h-6 mb-1" aria-hidden="true" />
                <span className="text-[9px] leading-[11px]">{item.title}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
