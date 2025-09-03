"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
  { href: "/voting", label: "조합원명부", icon: "👥" },
  { href: "/voting/agenda", label: "안건관리", icon: "📋" },
  { href: "/voting/vote", label: "투표관리", icon: "🗳️" },
  { href: "/voting/results", label: "결과조회", icon: "📊" },
  { href: "/voting/settings", label: "설정", icon: "⚙️" },
];

export default function VotingSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`
      ${isCollapsed ? "w-16" : "w-64"} 
      bg-white border-r border-gray-200 min-h-screen transition-all duration-300
      hidden md:block
    `}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className={`text-lg font-semibold text-black ${isCollapsed ? "hidden" : ""}`}>
          투표 시스템
        </h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <span className="text-black">
            {isCollapsed ? "→" : "←"}
          </span>
        </button>
      </div>
      
      <nav className="p-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-1
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                    : "text-black hover:bg-gray-50 hover:text-blue-600"
                }
                ${isCollapsed ? "justify-center" : ""}
              `}
              title={isCollapsed ? item.label : undefined}
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`font-medium ${isCollapsed ? "hidden" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className={`text-xs text-black text-center ${isCollapsed ? "hidden" : ""}`}>
          E-2pyo 솔루션홈
        </div>
      </div>
    </div>
  );
}