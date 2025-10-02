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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              각 조합에 맞는, 맞춤 특화 서비스와 견적으로<br />
              효율성은 높이고 부담은 낮게
            </h1>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">
              이용 문의 신청서 작성
            </h2>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[2.5rem] top-[5rem] bottom-[-3rem] w-0.5 bg-gray-200 hidden lg:block"></div>
                  )}

                  <div className="flex gap-8 items-start">
                    {/* Number Circle */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#588cfe] text-white flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
