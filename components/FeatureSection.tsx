"use client";

import { useState } from "react";
import Image from "next/image";

export default function FeatureSection() {
  const [showLearnMoreAlert, setShowLearnMoreAlert] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-blue-600 overflow-hidden relative">
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 bg-white/5 pattern-grid-lg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* White Box Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 overflow-hidden mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Key Feature
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-slate-900">
                온라인 전자투표 시스템<br />
                <span className="text-blue-600">스마트하게 시작하세요</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                안전하고 편리한 온-오프라인 투표 시스템.<br />
                선거 개설부터 개표 과정까지, 공정하고 정확하게<br className="hidden lg:block" />
                투명한 운영을 지원합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start">
                <a
                  href="https://naver.me/xktkFcrz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-600/25 transition-all inline-block text-center h-[60px]"
                >
                  무료 체험하기
                </a>
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <button
                    onClick={() => setShowLearnMoreAlert(true)}
                    className="px-8 py-4 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all w-full sm:w-auto h-[60px]"
                  >
                    자세히 알아보기
                  </button>
                  {showLearnMoreAlert && (
                    <p className="text-red-500 text-sm mt-2 font-medium">
                      준비중입니다.
                    </p>
                  )}
                </div>
              </div>

              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckIcon className="w-5 h-5 text-blue-600" />
                  <span>법적 효력이 있는 안전한 투표</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckIcon className="w-5 h-5 text-blue-600" />
                  <span>실시간 투표율 및 결과 확인</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckIcon className="w-5 h-5 text-blue-600" />
                  <span>PC/모바일 어디서든 간편 참여</span>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2 flex justify-center items-center relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <Image
                  src="/images/voting-people.png"
                  alt="온라인 전자투표 시스템을 사용하는 사람들 일러스트"
                  width={500}
                  height={400}
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12" /></svg>
  );
}
