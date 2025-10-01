import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white group transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 group-hover:pb-20 transition-all duration-200">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold cursor-pointer hover:text-blue-100 transition-colors">E-2pyo 솔루션홈</h1>
            </Link>
          </div>

          <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="grid grid-cols-4 gap-24">
              {/* 서비스안내 */}
              <div className="flex flex-col items-center">
                <Link href="/service-info/member-management" className="text-white font-medium hover:text-blue-100 transition-colors whitespace-nowrap mb-4">서비스안내</Link>
                <div className="absolute top-8 flex flex-col items-center gap-2 text-sm text-white/85 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/service-info/member-management" className="hover:text-blue-100 transition-colors whitespace-nowrap">조합원 명부 관리 시스템</Link>
                  <Link href="/service-info/sms-service" className="hover:text-blue-100 transition-colors whitespace-nowrap">문자서비스</Link>
                  <Link href="/service-info/e-voting" className="hover:text-blue-100 transition-colors whitespace-nowrap">전자투표</Link>
                </div>
              </div>

              {/* 이용안내 */}
              <div className="flex flex-col items-center">
                <Link href="/usage-guide/method" className="text-white font-medium hover:text-blue-100 transition-colors whitespace-nowrap mb-4">이용안내</Link>
                <div className="absolute top-8 flex flex-col items-center gap-2 text-sm text-white/85 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/usage-guide/method" className="hover:text-blue-100 transition-colors whitespace-nowrap">이용 방법 안내</Link>
                  <Link href="/usage-guide/process" className="hover:text-blue-100 transition-colors whitespace-nowrap">이용 절차 안내</Link>
                  <Link href="/usage-guide/pricing" className="hover:text-blue-100 transition-colors whitespace-nowrap">이용 수수료 안내</Link>
                </div>
              </div>

              {/* 서비스신청 */}
              <div className="flex flex-col items-center">
                <Link href="/service-application/form" className="text-white font-medium hover:text-blue-100 transition-colors whitespace-nowrap mb-4">서비스신청</Link>
                <div className="absolute top-8 flex flex-col items-center gap-2 text-sm text-white/85 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/service-application/form" className="hover:text-blue-100 transition-colors whitespace-nowrap">이용 신청서 작성</Link>
                </div>
              </div>

              {/* 고객센터 */}
              <div className="flex flex-col items-center">
                <Link href="/customer-center/notice" className="text-white font-medium hover:text-blue-100 transition-colors whitespace-nowrap mb-4">고객센터</Link>
                <div className="absolute top-8 flex flex-col items-center gap-2 text-sm text-white/85 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/customer-center/notice" className="hover:text-blue-100 transition-colors whitespace-nowrap">공지사항</Link>
                  <Link href="/customer-center/resources" className="hover:text-blue-100 transition-colors whitespace-nowrap">자료실</Link>
                  <Link href="/customer-center/faq" className="hover:text-blue-100 transition-colors whitespace-nowrap">FAQ</Link>
                </div>
              </div>
            </div>
          </nav>

          <div></div>
        </div>
      </div>
    </header>
  );
}