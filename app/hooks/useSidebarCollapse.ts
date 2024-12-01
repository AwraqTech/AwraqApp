import { useState } from "react";
import { usePathname } from "next/navigation";

export default function useSidebarLogic() {
    const pathname = usePathname();
    const [openMenus, setOpenMenus] = useState<string[]>([]);

    const handleToggle = (link: string) => {
        setOpenMenus((prev) =>
            prev.includes(link) ? prev.filter((item) => item !== link) : [...prev, link]
        );
    };

    const isActive = (path: string) => pathname.includes(path);

    const isArabic = pathname.includes("/en");

    return { pathname, isArabic, openMenus, handleToggle, isActive };
}
