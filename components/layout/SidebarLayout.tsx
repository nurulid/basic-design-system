import React from "react";

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-12">
      {children}
    </div>
  );
};
