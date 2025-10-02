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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              공지사항
            </h1>
            <p className="text-lg text-gray-300">
              e-2pyo의 공지 사항을 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Notice List Section */}
      <section className="bg-gray-50 py-12 lg:py-16 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      제목
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 w-48">
                      등록일
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 w-32">
                      첨부파일
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {notices.map((notice) => (
                    <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {notice.important && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500 text-white">
                              중요
                            </span>
                          )}
                          <span className="text-gray-900">{notice.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {notice.date}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {notice.hasAttachment ? "📎" : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List */}
            <div className="md:hidden divide-y divide-gray-200">
              {notices.map((notice) => (
                <div key={notice.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-2 mb-2">
                    {notice.important && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500 text-white flex-shrink-0">
                        중요
                      </span>
                    )}
                    <span className="text-gray-900 font-medium">{notice.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{notice.date}</span>
                    {notice.hasAttachment && <span>📎</span>}
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
