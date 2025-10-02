import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceApplicationFormPage() {
  // 네이버폼 URL을 여기에 입력하세요
  const naverFormUrl = "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              서비스 이용 신청
            </h1>
            <p className="text-lg text-gray-300">
              간단한 정보 입력으로 맞춤 상담을 받아보세요
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 py-12 lg:py-16 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {naverFormUrl ? (
              <iframe
                src={naverFormUrl}
                width="100%"
                height="1200"
                className="w-full border-0"
                title="서비스 이용 신청서"
              >
                로드 중...
              </iframe>
            ) : (
              <div className="p-12 text-center">
                <div className="mb-6">
                  <svg
                    className="mx-auto h-16 w-16 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  신청서 준비 중
                </h3>
                <p className="text-gray-600 mb-8">
                  네이버폼 URL을 설정하면 신청서가 표시됩니다.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 text-left max-w-2xl mx-auto">
                  <p className="text-sm text-gray-700 font-mono mb-2">
                    <span className="text-gray-500">{`// 네이버폼 URL 설정 방법:`}</span>
                  </p>
                  <p className="text-sm text-gray-700 font-mono">
                    <span className="text-blue-600">const</span> naverFormUrl = <span className="text-green-600">&quot;https://...&quot;</span>;
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              문의사항이 있으시면 담당자에게 연락주시기 바랍니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
