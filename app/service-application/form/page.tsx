import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceApplicationFormPage() {
  // 네이버폼 URL을 여기에 입력하세요
  const naverFormUrl = "";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section (Light Theme) */}
      <section className="bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Application
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                서비스 이용 신청
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              간단한 정보 입력으로 맞춤 상담을 받아보세요.<br className="hidden sm:block" />
              담당자가 빠르게 확인 후 연락드리겠습니다.
            </p>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </section>

      {/* Form Section (Vivid Blue Theme) */}
      <section className="bg-blue-600 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white/5 pattern-grid-lg opacity-30 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-1 lg:p-2">
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
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
                <div className="p-16 lg:p-24 text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg
                        className="h-10 w-10 text-blue-500"
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
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    신청서 준비 중
                  </h3>
                  <p className="text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
                    현재 서비스 이용 신청서를 준비하고 있습니다.<br />
                    관리자에게 문의하여 네이버폼 URL을 설정해주세요.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-6 text-left max-w-xl mx-auto border border-slate-200">
                    <p className="text-xs text-slate-500 font-mono mb-2 uppercase tracking-wider">
                      Developer Guide
                    </p>
                    <div className="font-mono text-sm bg-white p-4 rounded-lg border border-slate-200 text-slate-600 overflow-x-auto">
                      <span className="text-purple-600">const</span> <span className="text-blue-600">naverFormUrl</span> = <span className="text-green-600">&quot;https://form.naver.com/...&quot;</span>;
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center text-blue-100 flex flex-col items-center gap-2">
            <p className="text-lg font-medium">문의사항이 있으신가요?</p>
            <p className="text-sm opacity-80">고객센터 1588-0000 (평일 09:00 - 18:00)</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
