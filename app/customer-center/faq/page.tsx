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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              FAQ
            </h1>
            <p className="text-lg text-gray-300">
              자주 묻는 질문에 대해서 빠르게 궁금증을 해결하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List Section */}
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
                  {faqs.map((faq) => (
                    <tr key={faq.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-gray-900">{faq.title}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {faq.date}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {faq.hasAttachment ? "📎" : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List */}
            <div className="md:hidden divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="mb-2">
                    <span className="text-gray-900 font-medium">{faq.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{faq.date}</span>
                    {faq.hasAttachment && <span>📎</span>}
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
