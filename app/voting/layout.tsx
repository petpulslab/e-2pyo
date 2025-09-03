"use client";

import VotingHeader from "@/components/VotingHeader";
import VotingSidebar from "@/components/VotingSidebar";
import { useState } from "react";

export default function VotingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <VotingHeader />
      
      {/* Mobile menu button */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-2 text-black hover:text-blue-600"
        >
          <span className="text-lg">☰</span>
          <span>메뉴</span>
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="w-64 bg-white h-full">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">투표 시스템</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <span className="text-black">✕</span>
              </button>
            </div>
            <VotingSidebar />
          </div>
        </div>
      )}
      
      <div className="flex">
        <VotingSidebar />
        
        <main className="flex-1 w-full md:w-auto">
          {children}
        </main>
      </div>
    </div>
  );
}