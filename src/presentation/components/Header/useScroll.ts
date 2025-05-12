import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useScroll = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        if (pathname === "/") {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                setPendingScrollId(id);
            }
        } else {
            router.push(`/#${id}`);
        }
    };

    useEffect(() => {
        const hash = window.location.hash;
        const id = hash?.replace("#", "");

        if (id) {
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            } else {
                const interval = setInterval(() => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                        clearInterval(interval);
                    }
                }, 300);

                return () => clearInterval(interval);
            }
        } else if (pendingScrollId) {
            const el = document.getElementById(pendingScrollId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                setPendingScrollId(null);
            }
        }
    }, [pathname]);

    return { handleClick, targetId: pendingScrollId };
};
