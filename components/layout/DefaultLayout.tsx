import React from "react";
import { Navigation } from "../blocks/Navigation";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-shell min-h-screen bg-system-base font-sans text-system-text selection:bg-system-info/30 selection:text-system-heading transition-colors duration-300 pb-20">
      <Navigation />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </div>
  );
};
