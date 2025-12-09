import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SmsServicePage() {
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
                스마트 조합 관리
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                조합원 명부 연동<br />
                <span className="text-blue-600">알림톡 & 문자 서비스</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                조합원 관리의 시작. 정확하고 빠른 정보 전달을 위한<br className="hidden lg:block" />
                최적의 메시징 솔루션을 경험해보세요.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25">
                  서비스 도입 문의
                </button>
              </div>
            </div>
            <div className="relative lg:ml-auto group flex justify-center lg:justify-end">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition duration-500" />
              <Image
                src="/images/sms-service-hero.png"
                alt="조합원 문자 발송 서비스 및 카카오톡 알림톡 서비스"
                width={700}
                height={500}
                className="relative w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section (Dark Theme) */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              효율적인 조합 운영을 위한<br />
              <span className="text-blue-400">올인원 메시징 기능</span>
            </h2>
            <p className="text-lg text-slate-300">
              단순한 문자 발송을 넘어, 조합원 관리와 소통을 위한<br className="hidden sm:block" />
              다양한 편의 기능을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<UsersIcon className="w-8 h-8 text-blue-400" />}
              title="맞춤 대량 발송"
              description="총회 안내, 조합원 공지, 대의원 알림 등 대상별 맞춤형 대량 문자 발송을 지원합니다."
            />
            <FeatureCard
              icon={<MessageSquareIcon className="w-8 h-8 text-purple-400" />}
              title="관리 업무 최적화"
              description="예약 발송, 선택 발송, 발송 이력 관리 등 관리자의 업무 효율을 위한 기능을 제공합니다."
            />
            <FeatureCard
              icon={<CalendarIcon className="w-8 h-8 text-indigo-400" />}
              title="연동형 메시지"
              description="조합원 명부와 실시간으로 연동되어 별도의 명단 관리 없이 정확한 발송이 가능합니다."
            />
            <FeatureCard
              icon={<BarChartIcon className="w-8 h-8 text-sky-400" />}
              title="일상 정보 알림"
              description="조합의 소식과 일상적인 정보를 조합원들에게 신속하게 전달할 수 있습니다."
            />
            <FeatureCard
              icon={<MessageSquareIcon className="w-8 h-8 text-emerald-400" />}
              title="주간/월간 보고"
              description="정기적인 업무 보고와 진행 상황을 알림톡으로 간편하게 공유하세요."
            />
            <FeatureCard
              icon={<UsersIcon className="w-8 h-8 text-rose-400" />}
              title="정보 제공 서비스"
              description="조합원들이 알아야 할 필수 정보들을 놓치지 않도록 체계적으로 관리합니다."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            복잡한 조합원 소통, 이제 더 쉽고 편리해집니다.
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all">
            서비스 이용 문의하기
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-700 group">
      <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
}

// Inline SVGs components
function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
  );
}
