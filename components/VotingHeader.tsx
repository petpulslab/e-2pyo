import Link from "next/link";

export default function VotingHeader() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="pl-4">
        <div className="flex justify-start items-center py-4">
          <Link href="/">
            <h1 className="text-xl font-bold cursor-pointer hover:text-blue-100 transition-colors">E-2pyo 솔루션홈</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}