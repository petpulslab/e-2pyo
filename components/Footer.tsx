import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">회사 정보</h3>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white">주식회사 해내리</p>
              <p>대표자: 김현진</p>
              <p>개인정보 책임자: 김현진</p>
              <p>주소: 서울 중랑구 마장동</p>
            </div>
          </div>

          {/* 고객지원 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">고객지원</h3>
            <div className="space-y-2 text-sm">
              <p>평일: 09:00 - 18:00</p>
              <p>점심시간: 12:00 - 13:00</p>
              <p>주말 및 공휴일 휴무</p>
              <div className="mt-4 space-x-4">
                <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
                <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 주식회사 해내리. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
