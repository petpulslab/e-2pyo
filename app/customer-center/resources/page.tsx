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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              자료실
            </h1>
            <p className="text-lg text-gray-300">
              E-2pyo에 관련된 자료를 확인 또는 내려받으실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Resources List Section */}
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
                  {resources.map((resource) => (
                    <tr key={resource.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {resource.important && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500 text-white">
                              중요
                            </span>
                          )}
                          <span className="text-gray-900">{resource.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {resource.date}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {resource.hasAttachment && "📄"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List */}
            <div className="md:hidden divide-y divide-gray-200">
              {resources.map((resource) => (
                <div key={resource.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-2 mb-2">
                    {resource.important && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500 text-white flex-shrink-0">
                        중요
                      </span>
                    )}
                    <span className="text-gray-900 font-medium">{resource.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{resource.date}</span>
                    {resource.hasAttachment && <span>📄</span>}
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
