import React from "react";

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row gap-12">
      {children}
    </div>
  );
};
