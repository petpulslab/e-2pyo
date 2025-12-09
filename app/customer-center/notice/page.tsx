import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NoticePage() {
  const notices = [
    {
      id: 1,
      title: "[공지사항] 시스템 점검 안내 - 2025년 5월 30일(금)",
      date: "2025-04-03 15:20",
      important: true,
      hasAttachment: false
    },
    {
      id: 2,
      title: "[공지사항] 국가기관 클라우드컴퓨팅서비스 품질·성능 확인서 획득",
      date: "2023-11-28 11:21",
      important: true,
      hasAttachment: false
    },
    {
      id: 3,
      title: "[소식] 해외국가 서비스제공 - 키르기스스탄 공직선거 제공",
      date: "2023-04-14 18:02",
      important: true,
      hasAttachment: false
    },
    {
      id: 4,
      title: "[공지사항] 시스템 점검 안내 - 2025년 5월 30일(금)",
      date: "2025-04-03 15:20",
      important: false,
      hasAttachment: false
    },
    {
      id: 5,
      title: "[안내사항] 장기계약 폐지 추가 안내",
      date: "2025-03-12 10:18",
      important: false,
      hasAttachment: false
    },
    {
      id: 6,
      title: "[프로모션] 2025학년도 대학 온라인투표 특별할인 안내",
      date: "2024-09-24 17:56",
      important: false,
      hasAttachment: false
    },
    {
      id: 7,
      title: "[공지사항] 서비스 이용요금 변경안내",
      date: "2024-04-30 16:33",
      important: false,
      hasAttachment: false
    },
    {
      id: 8,
      title: "[공지사항] 회원가입 약관 신설 안내",
      date: "2024-01-05 17:47",
      important: false,
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
              Customer Center
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              <span className="text-blue-600">
                공지사항
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              E-2pyo의 새로운 소식과 중요한 안내사항을 확인하세요.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </section>

      {/* Notice List Section (Dark Theme with White Box) */}
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
                      첨부파일
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {notices.map((notice) => (
                    <tr key={notice.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          {notice.important && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                              중요
                            </span>
                          )}
                          <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                            {notice.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center text-sm text-slate-500 tabular-nums">
                        {notice.date}
                      </td>
                      <td className="px-6 py-5 text-center text-sm text-slate-400">
                        {notice.hasAttachment && (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600">
                            📎
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
              {notices.map((notice) => (
                <div key={notice.id} className="p-6 hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100">
                  <div className="flex items-start gap-2 mb-3">
                    {notice.important && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-50 text-red-600 border border-red-100 flex-shrink-0">
                        중요
                      </span>
                    )}
                    <span className="text-slate-900 font-medium leading-snug">{notice.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="tabular-nums">{notice.date}</span>
                    {notice.hasAttachment && <span className="text-slate-400">📎 첨부파일</span>}
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
