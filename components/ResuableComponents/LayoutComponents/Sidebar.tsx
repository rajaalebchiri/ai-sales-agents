"use client";

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { sidebarData } from "@/lib/data";
import { Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

function Sidebar({}: Props) {
  const pathname = usePathname();
  return (
    <div className="w-18 sm:w-28 h-screen sticky top-0 py-10 px-2 sm:px-6 border bg-background border-border flex flex-col items-center justify-start gap-10">
      <div>
        <Triangle />
          </div>
          <div className="w-full h-full justify-between items-center flex flex-col">
              {sidebarData.map((item) => (
                  <TooltipProvider key={item.id}>
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <Link href={item.link} className={`flex items-center gap-2 cursor-pointer rounded-lg p-2 ${pathname.includes(item.link) ? 'iconBackground': ''}`}>
                                  <item.icon />
                              </Link>
                          </TooltipTrigger>
                      </Tooltip>
                  </TooltipProvider>
              ))}
          </div>
    </div>
  );
}

export default Sidebar;
