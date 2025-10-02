import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SmsServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                조합원 명부 연동 등록<br />
                조합원 알림 문자 발송 서비스
              </h1>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/hero-mockups.png"
                alt="조합원 알림 문자 발송 서비스 모바일 화면"
                width={500}
                height={500}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2"></div>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                총회 안내, 조합원 공지 알림, 대의원 알림, 주간 업무 보고 등 맞춤 대량 문자 서비스 지원
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2"></div>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                예약 발송, 선택 발송, 발송 이력 관리 등 관리 업무 최적화
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
