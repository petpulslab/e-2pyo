import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "[서류양식] 관리자 지정확인서(한국전자투표 서비스)",
      date: "2021-10-12 18:08",
      important: true,
      hasAttachment: true
    },
    {
      id: 2,
      title: "[관리자] 이용기관 관리자 매뉴얼 (한국전자투표 서비스_리뉴얼 v2.1)",
      date: "2025-03-17 14:12",
      important: false,
      hasAttachment: true
    },
    {
      id: 3,
      title: "[투표참여] 투표진행방법 - 인명 선택",
      date: "2025-02-26 10:43",
      important: false,
      hasAttachment: true
    },
    {
      id: 4,
      title: "[투표참여] 투표진행방법 - 인명 찬반",
      date: "2025-02-26 10:43",
      important: false,
      hasAttachment: true
    },
    {
      id: 5,
      title: "[투표참여] 투표진행방법 - 안건 선택",
      date: "2025-02-26 10:41",
      important: false,
      hasAttachment: true
    },
    {
      id: 6,
      title: "[투표참여] 투표진행방법 - 안건 찬반",
      date: "2025-02-26 10:40",
      important: false,
      hasAttachment: true
    },
    {
      id: 7,
      title: "[투표참여] 문자투표 방법 상세 안내",
      date: "2025-02-26 10:38",
      important: false,
      hasAttachment: true
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
              Downloads
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                자료실
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              서비스 이용에 필요한 매뉴얼과 서류 양식을 확인하세요.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </section>

      {/* Resources List Section (Dark Theme with White Box) */}
      <section className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white/5 pattern-grid-lg opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-slate-900">
                      제목
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-slate-900 w-48">
                      등록일
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-slate-900 w-32">
                      다운로드
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {resources.map((resource) => (
                    <tr key={resource.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          {resource.important && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                              중요
                            </span>
                          )}
                          <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center text-sm text-slate-500 tabular-nums">
                        {resource.date}
                      </td>
                      <td className="px-6 py-5 text-center text-sm text-slate-400">
                        {resource.hasAttachment && (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List */}
            <div className="md:hidden divide-y divide-slate-100">
              {resources.map((resource) => (
                <div key={resource.id} className="p-6 hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100">
                  <div className="flex items-start gap-2 mb-3">
                    {resource.important && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-50 text-red-600 border border-red-100 flex-shrink-0">
                        중요
                      </span>
                    )}
                    <span className="text-slate-900 font-medium leading-snug">{resource.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="tabular-nums">{resource.date}</span>
                    {resource.hasAttachment && (
                      <span className="flex items-center gap-1 text-blue-600 font-medium">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        다운로드
                      </span>
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
