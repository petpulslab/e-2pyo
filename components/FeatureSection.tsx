export default function FeatureSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              온라인 전자투표 시스템
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              안전하고 편리한 온-오프라인 투표 시스템
              <br />
              선거 개설부터 개표 과정을 공정하고 정확하게 안내해요
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
              자세히보기
            </button>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center space-x-8">
              <div className="relative">
                <div className="w-24 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 w-64">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-blue-100 rounded"></div>
                      <div className="h-3 bg-blue-100 rounded w-3/4"></div>
                    </div>
                    <div className="flex space-x-2 pt-4">
                      <div className="h-8 bg-blue-500 rounded flex-1"></div>
                      <div className="h-8 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-20 h-28 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
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
