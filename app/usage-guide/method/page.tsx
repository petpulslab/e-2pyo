import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UsageMethodPage() {
  const steps = [
    {
      number: "01",
      title: "이용 문의 신청서 작성",
      description: "온라인 또는 유선으로 이용 문의 신청서를 작성해주세요."
    },
    {
      number: "02",
      title: "서비스 접수",
      description: "담당자가 신청서를 확인하고 서비스 접수를 진행합니다."
    },
    {
      number: "03",
      title: "방문 상담",
      description: "전문 상담사가 조합을 방문하여 상세한 상담을 진행합니다."
    },
    {
      number: "04",
      title: "맞춤 견적 제공",
      description: "조합의 특성과 요구사항에 맞는 맞춤 견적을 제공합니다."
    },
    {
      number: "05",
      title: "계약",
      description: "견적 확인 후 계약을 진행하고 서비스를 시작합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section (Light Theme) */}
      <section className="bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              각 조합에 맞는,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                맞춤 특화 서비스
              </span>와 견적
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              효율성은 높이고 부담은 낮게, <br className="hidden sm:block" />
              체계적인 프로세스로 최상의 서비스를 제공합니다.
            </p>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </section>

      {/* Process Section (Dark Theme) */}
      <section className="bg-slate-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium border border-blue-800 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Process Flow
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16">
              서비스 이용 절차
            </h2>

            <div className="grid gap-6">
              {steps.map((step, index) => (
                <div key={index} className="group relative bg-slate-800 rounded-2xl p-6 lg:p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-slate-900 text-blue-400 flex items-center justify-center text-xl lg:text-2xl font-bold border border-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow Icon (Desktop) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block text-slate-700 group-hover:text-blue-500/50 transition-colors transform group-hover:translate-y-1 duration-300">
                        <svg className="w-8 h-8 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
