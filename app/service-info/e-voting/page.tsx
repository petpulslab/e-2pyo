import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EVotingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              E- 2pyo 시스템
            </h1>
            <p className="text-2xl lg:text-3xl text-white font-bold mb-6">
              이제 복잡하고 구구한 절차는 NO!
            </p>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              빠르고 쉽게 진행하는 총회업무는 법적으로 허가된 전자 투표로 관리하자.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              조합원 명부 관리 시스템과 연동한 E- 2pyo 시스템
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              조합 총회 업무를 획기적으로 편하고 빠르고 쉽게 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* SMS Service Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              조합원 명부와 연동된 문자 메시지 서비스
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              조합원 명부와 연동된 기능성 문자 메시지 서비스로 시간과 노력 최적화
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">맞춤 대량 문자 서비스</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>총회 안내</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>조합원 공지 알림</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>대의원 알림</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>주간 업무 보고</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">관리 업무 최적화</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>예약 발송</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>선택 발송</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>발송 이력 관리</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">일상적인 정보 제공 서비스</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>조합의 일상적인 정보 제공 문자 알림 서비스</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>조합원 정보 제공 알림 메시지 서비스</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">보고 알림 서비스</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>주간 보고 알림 서비스</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#588cfe] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>월간 보고 알림 서비스</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Notice Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600">
              * 서비스 개발중
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
