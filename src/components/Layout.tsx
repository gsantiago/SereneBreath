import React, { useState } from "react";

import { Header } from "@/components/Header";

export interface LayoutProps {
  showHeader: boolean;
  children: React.ReactNode;
}

export function Layout({ showHeader, children }: LayoutProps) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="h-full  bg-sky-100 dark:bg-slate-900">
      <div className="relative m-auto flex h-full flex-col items-center justify-between overflow-hidden ">
        <Header
          isVisible={showHeader}
          showSettings={showSettings}
          onToggleSettings={() => {
            setShowSettings((show) => !show);
          }}
        />
        <div className="flex h-full w-full items-end justify-center pb-5 md:items-center">
          {children}
        </div>
      </div>
      {showSettings && (
        <div
          onClick={() => {
            setShowSettings(false);
          }}
          className="absolute left-0 top-0 h-full w-full"
        />
      )}
    </div>
  );
}
