export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">E-2pyo 솔루션홈</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-100 transition-colors">서비스안내</a>
            <a href="#" className="hover:text-blue-100 transition-colors">이용 안내</a>
            <a href="#" className="hover:text-blue-100 transition-colors">견적 문의</a>
            <a href="#" className="hover:text-blue-100 transition-colors">시스템 신청</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <button className="text-sm hover:text-blue-100 transition-colors">로그인</button>
            <button className="text-sm bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}