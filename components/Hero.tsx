import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#3E68CA] via-[#2A3F6E] to-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-[0_0_30px_rgba(62,104,202,0.5)]">
              주택 조합 운영,
              <br />
              이제 온라인으로 간편하게
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              재건축·재개발·리모델링 조합을 위한 전문 투표 플랫폼
              <br />
              주거와 건물을 연결하는 사람 중심의 소통 가치를 실현합니다
              <br />
              안전하고 투명한 의사결정 프로세스를 경험하세요
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
