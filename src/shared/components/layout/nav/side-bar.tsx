import { Link } from "react-router-dom";
import { NAV_ITEMS } from "@/shared/constants/nav";

export const SideBar = () => {
  return (
    <aside className="hidden min-h-screen w-[200px] fixed top-0 left-0 bg-white/90 shadow-sm md:block mt-[68px]">
      <div className="p-4">
        <ul>
          {NAV_ITEMS.filter((item) => !item.isMobileOnly).map((item) => (
            <li key={item.title}>
              <Link to="/" className="h-12 flex items-center gap-2">
                <img src={item.img} alt={item.title} width={24} height={24} />
                <span className="text-sm leading-[14px]">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
