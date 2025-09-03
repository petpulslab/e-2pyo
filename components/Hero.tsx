import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              이제 투표도 온라인으로
              <br />
              빠르고 간편하게 <span className="text-blue-100">E-2Pyo</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              안전하고 편리한 온-오프라인 투표 시스템
              <br />
              선거 개설부터 개표 과정을 공정하고 정확하게 안내해요
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              제안서 다운로드
            </button>
          </div>

          <div className="relative lg:pl-8 flex justify-center">
            <Image
              src="/images/hero-mockups.png"
              alt="E-2Pyo 모바일 앱 화면 목업 - 투표 및 대시보드"
              width={600}
              height={500}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
