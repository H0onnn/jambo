import { HeaderLayout } from "./header-layout";
import { Input } from "@/shared/components/ui";

export const Header = () => {
  return (
    <HeaderLayout className="flex items-center gap-5">
      <Input
        placeholder="Search for Cards"
        leftSlot={<img src="/src/assets/logo.svg" alt="logo" />}
      />

      <button>
        <img src="/src/assets/bell.svg" alt="bell" />
      </button>
    </HeaderLayout>
  );
};
