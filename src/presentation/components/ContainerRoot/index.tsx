import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="max-w-[1248px] h-auto mx-auto px-3 xl:px-0">{children}</div>;
};
