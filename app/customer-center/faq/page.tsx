import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">FAQ</h1>
          <div className="bg-white rounded-lg shadow p-8">
            <p className="text-gray-600">FAQ 페이지입니다.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
