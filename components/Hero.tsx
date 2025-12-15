"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showProposalAlert, setShowProposalAlert] = useState(false);

  return (
    <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
              E-2pyo 솔루션
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              주택 조합 운영,<br />
              이제 온라인으로<br />
              <span className="text-blue-600">간편하게 시작하세요.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              재건축·재개발·리모델링 조합을 위한 전문 투표 플랫폼.<br className="hidden lg:block" />
              안전하고 투명한 의사결정 프로세스를 경험하세요.
            </p>
            <div className="flex flex-wrap gap-4 items-start">
              <a
                href="https://naver.me/xktkFcrz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 inline-block text-center h-[60px]"
              >
                서비스 신청
              </a>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setShowProposalAlert(true)}
                  className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all hover:border-slate-300 h-[60px]"
                >
                  제안서 다운로드
                </button>
                {showProposalAlert && (
                  <p className="text-red-500 text-sm mt-2 font-medium">
                    준비중입니다.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto group flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-2xl">
              <Image
                src="/images/hero-background.webp"
                alt="Modern cityscape with impressive architecture"
                width={688}
                height={384}
                className="max-w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
