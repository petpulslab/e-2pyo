import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              주택 조합 운영,
              <br />
              이제 온라인으로
              <br />
              간편하게.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              재건축·재개발·리모델링 조합을 위한 전문 투표 플랫폼.
              <br />
              안전하고 투명한 의사결정 프로세스를 경험하세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all">
                제안서 다운로드
              </button>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all">
                서비스 신청
              </button>
            </div>
          </div>

          <div className="relative lg:pl-8 flex justify-center">
            <Image
              src="/images/hero-background.png"
              alt="Modern cityscape with impressive architecture"
              width={600}
              height={500}
              className="max-w-full h-auto rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
