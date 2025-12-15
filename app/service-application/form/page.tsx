import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceApplicationFormPage() {


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
              <span className="text-blue-600">
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
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                서비스 이용 신청서 작성
              </h3>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                아래 버튼을 클릭하여 네이버 폼으로 이동하신 후,<br className="hidden sm:block" />
                신청서를 작성해 주시면 담당자가 빠르게 연락드리겠습니다.
              </p>

              <a
                href="https://naver.me/xktkFcrz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                <span>신청서 작성하러 가기</span>
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <p className="mt-8 text-sm text-slate-500">
                * 새 창에서 네이버 폼이 열립니다.
              </p>
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
