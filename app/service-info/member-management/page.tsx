import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function MemberManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                조합원 명부 관리<br />시스템
              </h1>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/hero-mockups.png"
                alt="조합원 명부 관리 시스템 모바일 화면"
                width={500}
                height={500}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 효율적 시스템 Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              조합원 명부 관리를 위한 효율적 시스템
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2"></div>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  권리 내역부터 대표자 선임 변경까지 손쉽고 빠른 명부 등록과 변경 기능 제공
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2"></div>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  조합원 명부에 따른 정확한 우편 발송과 총회 참석 확인을 통한 비용 지급, 계좌 관리 연동 기능
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 보안 Section */}
      <section className="bg-[#1a1a1a] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              보안 유지를 위한<br />
              고유 조합 개별 프로그램 제공
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
