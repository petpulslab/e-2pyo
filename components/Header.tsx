import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold cursor-pointer hover:text-white/90 transition-colors">E-2pyo 솔루션홈</h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/service-info/member-management" className="text-white font-medium hover:text-white/90 transition-colors whitespace-nowrap">서비스안내</Link>
            <Link href="/usage-guide/method" className="text-white font-medium hover:text-white/90 transition-colors whitespace-nowrap">이용안내</Link>
            <Link href="/service-application/form" className="text-white font-medium hover:text-white/90 transition-colors whitespace-nowrap">서비스신청</Link>
            <Link href="/customer-center/notice" className="text-white font-medium hover:text-white/90 transition-colors whitespace-nowrap">고객센터</Link>
          </nav>

          <div>
            {/* Placeholder for right-side elements like login button if needed */}
          </div>
        </div>
      </div>
    </header>
  );
}