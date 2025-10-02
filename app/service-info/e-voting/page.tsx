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
