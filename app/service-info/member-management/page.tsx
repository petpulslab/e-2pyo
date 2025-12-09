import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function MemberManagementPage() {
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
                효율적인 조합 운영
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                조합원 명부 관리<br />
                <span className="text-blue-600">통합 시스템</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                복잡한 명부 관리는 이제 그만. 입력부터 수정, 발송까지<br className="hidden lg:block" />
                원스톱으로 관리하는 스마트한 솔루션입니다.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25">
                  도입 상담 신청
                </button>
              </div>
            </div>

            <div className="relative lg:ml-auto group flex justify-center lg:justify-end">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition duration-500" />
              <Image
                src="/images/hero-mockups.png"
                alt="조합원 명부 관리 시스템 모바일 화면"
                width={600}
                height={600}
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
              조합원 명부 관리를 위한<br />
              <span className="text-blue-400">완벽한 솔루션</span>
            </h2>
            <p className="text-lg text-slate-300">
              명부 작성의 번거로움을 줄이고 정확성은 높였습니다.<br className="hidden sm:block" />
              체계적인 데이터 관리로 조합 운영의 효율을 극대화하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<FileTextIcon className="w-8 h-8 text-blue-400" />}
              title="명부 관리의 끝판왕"
              description="복잡한 엑셀 작업 없이 웹에서 간편하게. 조합원 명부 작성과 관리가 획기적으로 쉬워집니다."
            />
            <FeatureCard
              icon={<UploadCloudIcon className="w-8 h-8 text-purple-400" />}
              title="간편한 일괄 등록"
              description="전용 양식을 다운로드하여 작성 후 업로드하면 끝. 수백 명의 조합원 정보도 한 번에 등록하고 수정할 수 있습니다."
            />
            <FeatureCard
              icon={<RefreshCwIcon className="w-8 h-8 text-indigo-400" />}
              title="실시간 권리 변동 관리"
              description="권리 내역 변경부터 대표자 선임/해임까지. 모든 변동 사항을 즉시 반영하고 이력을 관리하세요."
            />
            <FeatureCard
              icon={<CheckCircleIcon className="w-8 h-8 text-sky-400" />}
              title="정확한 우편/비용 연동"
              description="최신 명부 기반으로 우편 발송 누락을 방지하고, 총회 참석 확인 및 계좌 관리까지 연동됩니다."
            />
          </div>
        </div>
      </section>

      {/* Security Section (Dark Contrast - Keep Dark but adjust for consistency if needed) */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-100 relative overflow-hidden">
        {/* Inverting Security Section to Light to contrast with Dark Features above it */}
        <div className="absolute inset-0 bg-blue-50/50 pattern-grid-lg opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl bg-white p-10 border border-slate-200 shadow-xl backdrop-blur-sm">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-6 border border-emerald-200">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>강력한 보안 시스템</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                보안 유지를 위한<br />
                <span className="text-emerald-500">고유 조합 개별 프로그램</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                소중한 개인정보가 담긴 명부, 아무데나 맡길 수 없죠.<br />
                조합별로 독립된 고유 프로그램을 제공하여 데이터 보안을 철저히 지킵니다.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center ring-1 ring-emerald-100 shadow-lg">
                <LockIcon className="w-10 h-10 text-emerald-500" />
              </div>
            </div>
          </div>
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

// Inline SVGs
function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
  );
}

function UploadCloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
  );
}

function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
  );
}
