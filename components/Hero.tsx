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
              무료상담문의
            </button>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="space-y-3">
                    <div className="h-3 bg-blue-200 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 bg-blue-500 rounded w-1/3"></div>
                      <div className="h-8 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
