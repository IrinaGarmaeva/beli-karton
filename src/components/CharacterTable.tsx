const CharacterTable = () => {
  const characters = [
    "Đ",
    "đ",
    "Ž",
    "ž",
    "Ć",
    "ć",
    "Č",
    "č",
    "Š",
    "š",
    "Dž",
    "dž",
  ];

  return (
    <div className="mt-2 flex flex-col text-sm justify-center overflow-x-auto">
      <h2 className="font-semibold text-center">Буквы сербской латиницы</h2>
      <table className="mt-2 min-w-full border border-gray-400">
        <tbody>
          <tr className="border-b">
            {characters.map((item, index) => (
              <td
                key={index}
                className="p-2 border border-gray-400 text-center"
              >
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable;
