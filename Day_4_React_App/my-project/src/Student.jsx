const students = [
  { id: 1, name: "Anu", grade: 85 },
  { id: 2, name: "Rahul", grade: 45 },
  { id: 3, name: "Sneha", grade: 72 },
];

export default function Student() {
  return (
    <>
      <div className="text-6xl text-amber-50">Student</div>
      <table className="w-1/3 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-2xl font-semibold border-b border-gray-300">
              Roll No
            </th>
            <th className="px-6 py-3 text-left text-2xl font-semibold border-b border-gray-300">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-2xl font-semibold border-b border-gray-300">
              Grade
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {students.map((item, key) => (
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-xl border-b border-gray-300">
                {key + 1}
              </td>
              <td className="px-6 py-4 text-xl border-b border-gray-300">
                {item.name}
              </td>
              <td
                className={`px-6 py-4 text-xl border-b border-gray-300 ${
                  item.grade >= 50 ? "text-green-700" : "text-red-700"
                }`}
              >
                {item.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
