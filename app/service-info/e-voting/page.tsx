import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function EVotingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section (Light Theme) */}
      <section className="bg-white text-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] mix-blend-multiply" />
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
                전자투표 시스템
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                E-2pyo<br />
                <span className="text-blue-600">전자투표 시스템</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                이제 복잡하고 구구한 절차는 NO!<br />
                빠르고 쉽게 진행하는 총회업무는 법적으로 허가된<br className="hidden lg:block" />
                전자 투표로 스마트하게 관리하세요.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25">
                  서비스 도입 문의
                </button>
              </div>
            </div>

            <div className="relative lg:ml-auto group flex justify-center lg:justify-end">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl">
                <Image
                  src="/images/voting-people.png"
                  alt="전자투표 시스템 투표하는 사람들"
                  width={600}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section (Dark Theme) */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              조합원 명부 관리 시스템과<br />
              <span className="text-blue-400">완벽하게 연동되는 서비스</span>
            </h2>
            <p className="text-lg text-slate-300">
              조합 총회 업무를 획기적으로 편하고 빠르고 쉽게 지원합니다.<br className="hidden sm:block" />
              명부와 연동된 기능성 문자 메시지 서비스로 최적화된 업무를 경험하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<MessageCircleIcon className="w-8 h-8 text-blue-400" />}
              title="맞춤 대량 문자 서비스"
              description="총회 안내, 조합원 공지, 대의원 알림, 주간 업무 보고 등 다양한 목적에 맞는 대량 문자를 신속하게 발송합니다."
              listItems={[
                "총회 안내 및 공지",
                "조합원/대의원 알림",
                "주간 업무 보고 발송"
              ]}
            />
            <FeatureCard
              icon={<SettingsIcon className="w-8 h-8 text-purple-400" />}
              title="관리 업무 최적화"
              description="예약 발송, 선택 발송 등 관리자가 원하는 시점에 원하는 대상에게 정확하게 메시지를 전달할 수 있습니다."
              listItems={[
                "원하는 시간 예약 발송",
                "대상 선택 정밀 발송",
                "상세 발송 이력 관리"
              ]}
            />
            <FeatureCard
              icon={<BellIcon className="w-8 h-8 text-indigo-400" />}
              title="일상적인 정보 제공"
              description="조합의 소식과 조합원들에게 필요한 정보를 정기적으로 알림으로써 소통을 강화합니다."
              listItems={[
                "조합 소식 실시간 알림",
                "필수 정보 정기 제공",
                "조합원 소통 강화"
              ]}
            />
            <FeatureCard
              icon={<FileTextIcon className="w-8 h-8 text-sky-400" />}
              title="보고 알림 서비스"
              description="주간 및 월간 보고를 알림톡이나 문자로 간편하게 공유하여 업무 투명성을 높입니다."
              listItems={[
                "주간 업무 보고 공유",
                "월간 진행 상황 보고",
                "업무 투명성 증대"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Development Notice Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></span>
            현재 서비스 개발 중에 있습니다
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description, listItems }: { icon: React.ReactNode, title: string, description: string, listItems: string[] }) {
  return (
    <div className="bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-700 group h-full flex flex-col">
      <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-300 leading-relaxed text-sm lg:text-base mb-6 flex-grow">
        {description}
      </p>
      {listItems && (
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center text-slate-400 text-sm">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Inline SVGs
function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
  );
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
  );
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
  );
}
