import { toast } from "react-toastify";

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

  const handleCopy = (item: string) => {
    navigator.clipboard.writeText(item).then(() => {
      toast.success(`${item} copied to clipboard!`, {
        autoClose: 2000,
      });
    }).catch(() => {
      toast.error(`Failed to copy: ${item}`, {
        autoClose: 3000,
      })
    });
  };

  return (
    <div className="mt-3 flex flex-col text-sm justify-center overflow-x-auto">
      <h2 className="font-semibold text-center">Буквы сербской латиницы</h2>
      <p>По клику на ячейку буква автоматически копируется</p>
      <table className="mt-2 min-w-full border border-gray-400">
        <tbody>
          <tr className="border-b">
            {characters.map((item, index) => (
              <td
                key={index}
                className="p-2 border border-gray-400 text-center"
                onClick={() => handleCopy(item)}
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
