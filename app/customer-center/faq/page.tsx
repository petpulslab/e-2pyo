import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FaqPage() {
  const faqs = [
    {
      id: 1,
      title: "온라인투표를 이용하고 싶은데 어떻게 해야할까요?",
      date: "2025-03-12 10:18",
      hasAttachment: false
    },
    {
      id: 2,
      title: "신규 기관이라 사업자 번호가 아직 없을 경우 어떻게 해야 하나요?",
      date: "2024-09-24 17:56",
      hasAttachment: false
    },
    {
      id: 3,
      title: "요금 납부는 언제까지 해야하나요?",
      date: "2024-04-30 16:33",
      hasAttachment: false
    },
    {
      id: 4,
      title: "요금을 납부하려고 하는데 입금 계좌번호를 어디서 확인할 수 있나요?",
      date: "2024-01-05 17:47",
      hasAttachment: false
    },
    {
      id: 5,
      title: "세금계산서 발행은 언제 되나요?",
      date: "2023-11-28 11:21",
      hasAttachment: false
    },
    {
      id: 6,
      title: "투표 참여 방법은 어떻게 확인할 수 있나요?",
      date: "2023-09-27 11:30",
      hasAttachment: false
    },
    {
      id: 7,
      title: "SMS 발송 시 직접 내용을 입력하여 발송할 수 있나요?",
      date: "2023-06-05 17:15",
      hasAttachment: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section (Light Theme) */}
      <section className="bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Q&A
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                FAQ
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              자주 묻는 질문을 통해 궁금증을 빠르게 해결하세요.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </section>

      {/* FAQ List Section (Dark Theme with White Box) */}
      <section className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white/5 pattern-grid-lg opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden px-8 py-8">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="group border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                  <button className="w-full text-left flex items-start gap-4 py-4 rounded-xl hover:bg-slate-50 transition-colors px-4 -mx-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mt-0.5">
                      Q
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {faq.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-2">
                        {faq.date}
                      </p>
                    </div>
                    <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </button>
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
