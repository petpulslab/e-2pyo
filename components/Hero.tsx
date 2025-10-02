import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#3E68CA] via-[#2A3F6E] to-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-[0_0_30px_rgba(62,104,202,0.5)]">
              이제 투표도 온라인으로
              <br />
              빠르고 간편하게 <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">E-2Pyo</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              안전하고 편리한 온-오프라인 투표 시스템
              <br />
              선거 개설부터 개표 과정을 공정하고 정확하게 안내해요
            </p>
            <button className="bg-white text-[#3E68CA] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 hover:shadow-[0_0_20px_rgba(62,104,202,0.6)] transition-all shadow-lg">
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
