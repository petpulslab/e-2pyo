import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.png"
                  alt="E-2pyo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">E-2pyo</h2>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              주택 재건축·재개발 정비사업조합의<br />
              투명하고 효율적인 운영을 위한<br />
              최고의 파트너가 되겠습니다.
            </p>
          </div>

          {/* Company Info (Span 4) */}
          <div className="md:col-span-4 lg:col-span-5">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
              회사 정보
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-medium text-slate-300">주식회사 해내리</span>
                <span className="hidden sm:block text-slate-700">|</span>
                <span>대표자: 김현진</span>
              </p>
              <p>사업자등록번호: 204-86-53245</p>
              <p>개인정보 책임자: 김현진</p>
              <p>주소: 서울특별시 중랑구 마장동 777-7</p>
            </div>
          </div>

          {/* Customer Support (Span 4) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
              고객지원
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-white tracking-wider">1588-0000</p>
                <p className="text-xs text-slate-500 mt-1">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
              </div>

              <div className="flex flex-col gap-2 text-sm pt-2">
                <Link href="#" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                  <span>이용약관</span>
                </Link>
                <Link href="#" className="font-semibold text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                  <span>개인정보처리방침</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} HENEREE Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Family Site</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
