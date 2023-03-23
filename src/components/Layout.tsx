import React, { useState } from "react";

import { Header } from "@/components/Header";

export interface LayoutProps {
  showHeaderAndFooter: boolean;
  children: React.ReactNode;
}

export function Layout({ showHeaderAndFooter, children }: LayoutProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="h-full  bg-sky-100 dark:bg-slate-900">
      <div className=" relative m-auto flex h-full flex-col items-center justify-between overflow-hidden ">
        <div className="w-full max-w-5xl p-5">
          <Header
            isVisible={showHeaderAndFooter}
            showSettings={showSettings}
            onToggleSettings={() => {
              setShowSettings((show) => !show);
              setShowAbout(false);
            }}
          />
        </div>
        <div className="flex h-full w-full items-end justify-center pb-5 md:items-center">
          {children}
        </div>
      </div>
      {(showSettings || showAbout) && (
        <div
          onClick={() => {
            setShowSettings(false);
            setShowAbout(false);
          }}
          className="absolute left-0 top-0 h-full w-full"
        />
      )}
    </div>
  );
}
