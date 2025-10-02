import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-[#3E68CA]/10 to-transparent border-2 border-[#3E68CA]/20 hover:border-[#3E68CA]/40 transition-all">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              온라인 전자투표 시스템
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              안전하고 편리한 온-오프라인 투표 시스템
              <br />
              선거 개설부터 개표 과정을 공정하고 정확하게 안내해요
            </p>
            <button className="bg-gradient-to-r from-[#3E68CA] to-[#2A4D9C] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_20px_rgba(62,104,202,0.4)] transition-all shadow-lg">
              체험하기
            </button>
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/images/voting-people.png"
              alt="온라인 전자투표 시스템을 사용하는 사람들 일러스트"
              width={500}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
