import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="container max-w-[1248px] min-h-screen mx-auto px-3 xl:px-0">{children}</div>;
};
