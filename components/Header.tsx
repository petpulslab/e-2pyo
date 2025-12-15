"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "서비스안내",
    href: "/service-info/member-management",
    submenu: [
      { title: "조합원 명부 관리 시스템", href: "/service-info/member-management", icon: "👥" },
      { title: "문자서비스", href: "/service-info/sms-service", icon: "💬" },
      { title: "전자투표", href: "/service-info/e-voting", icon: "🗳️" },
    ],
  },
  {
    title: "이용안내",
    href: "/usage-guide/method",
    submenu: [
      { title: "이용 방법 안내", href: "/usage-guide/method", icon: "📋" },
    ],
  },
  {
    title: "서비스신청",
    href: "/service-application/form",
    submenu: [
      { title: "이용 신청서 작성", href: "/service-application/form", icon: "📝" },
    ],
  },
  {
    title: "고객센터",
    href: "/customer-center/notice",
    submenu: [
      { title: "공지사항", href: "/customer-center/notice", icon: "📢" },
      { title: "자료실", href: "/customer-center/resources", icon: "📁" },
      { title: "FAQ", href: "/customer-center/faq", icon: "❓" },
    ],
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-slate-900 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="E-2pyo Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-xl font-bold cursor-pointer group-hover:text-blue-600 transition-colors">
                E-2pyo 솔루션홈
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className="text-slate-900 font-medium hover:text-blue-600 transition-colors whitespace-nowrap flex items-center gap-1 py-2"
                >
                  {item.title}
                  {item.submenu && item.submenu.length > 0 && (
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {item.submenu && item.submenu.length > 0 && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[200px]">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg">{subItem.icon}</span>
                          <span className="text-sm font-medium">{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.title} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
              <Link
                href={item.href}
                className="block text-slate-900 font-bold text-lg mb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
              {item.submenu && item.submenu.length > 0 && (
                <div className="pl-4 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{subItem.icon}</span>
                      <span className="text-sm">{subItem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
