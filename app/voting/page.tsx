export default function VotingPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">조합원 명부</h2>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <div className="flex items-center gap-2">
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>2022년</option>
              <option>2023년</option>
              <option>2024년</option>
            </select>
          </div>

          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            검색
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <span className="text-gray-600">선택 : 964건</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            삭제
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            저장
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            업적 변경 조정
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            참석 여 불투
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            지정
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            온라인재검
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            더보드
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            업적과회중
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            성남시회응
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="border border-gray-300 p-2 text-center">□</th>
                <th className="border border-gray-300 p-2">연번</th>
                <th className="border border-gray-300 p-2">조합원 번호</th>
                <th
                  className="border border-gray-300 p-2 text-center"
                  colSpan={5}
                >
                  조합원
                </th>
                <th
                  className="border border-gray-300 p-2 text-center"
                  colSpan={5}
                >
                  권리내역
                </th>
                <th
                  className="border border-gray-300 p-2 text-center"
                  colSpan={2}
                >
                  대표자 선임여부
                </th>
              </tr>
              <tr className="bg-gray-100 text-black">
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1">성명</th>
                <th className="border border-gray-300 p-1">생년월일</th>
                <th className="border border-gray-300 p-1">주소</th>
                <th className="border border-gray-300 p-1">연락처1</th>
                <th className="border border-gray-300 p-1">동호수</th>
                <th
                  className="border border-gray-300 p-1 text-center"
                  colSpan={3}
                >
                  토지
                </th>
                <th className="border border-gray-300 p-1">공유유무</th>
                <th className="border border-gray-300 p-1">허가유무</th>
                <th className="border border-gray-300 p-1">토지</th>
                <th className="border border-gray-300 p-1 text-right">
                  60,143.96
                </th>
                <th className="border border-gray-300 p-1 text-right">
                  59,958.12
                </th>
              </tr>
              <tr className="bg-gray-100 text-black">
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1">공부면적</th>
                <th className="border border-gray-300 p-1">편입면적</th>
                <th className="border border-gray-300 p-1">소유면적</th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
                <th className="border border-gray-300 p-1"></th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-center">1</td>
                <td className="border border-gray-300 p-2 text-center">1</td>
                <td className="border border-gray-300 p-2">김**</td>
                <td className="border border-gray-300 p-2">58****</td>
                <td className="border border-gray-300 p-2">
                  경기도 안양시 동안구 관평동 333, 1동(현대아파트)
                </td>
                <td className="border border-gray-300 p-2">010-1151-1501</td>
                <td className="border border-gray-300 p-2">1-101</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2 text-right">53.43</td>
                <td className="border border-gray-300 p-2 text-right">53.43</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-center">2</td>
                <td className="border border-gray-300 p-2 text-center">2</td>
                <td className="border border-gray-300 p-2">김**</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2 text-center">대표</td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-center">3</td>
                <td className="border border-gray-300 p-2 text-center"></td>
                <td className="border border-gray-300 p-2">박**</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2 text-center">0</td>
                <td className="border border-gray-300 p-2 text-center">공유</td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-center">7</td>
                <td className="border border-gray-300 p-2 text-center"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2 text-center">0</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-center">133</td>
                <td className="border border-gray-300 p-2 text-center"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-center">134</td>
                <td className="border border-gray-300 p-2 text-center"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-center">135</td>
                <td className="border border-gray-300 p-2 text-center"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2 text-center">대</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-center">136</td>
                <td className="border border-gray-300 p-2 text-center"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end items-center gap-4 mt-4">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">
            일석 디자인풍
          </div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">
            개발동향
          </div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">
            업적통계
          </div>
        </div>
      </div>
    </div>
  );
}
