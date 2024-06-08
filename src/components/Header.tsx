import { PiPrinterThin } from "react-icons/pi";
import CharacterTable from "./CharacterTable";

const Header = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col justify-center items-center print:hidden">
      <h1 className="text-sm text-center">
        Автоматическое создание белого картона для прибывших в Сербию после
        визарана.
      </h1>
      <p className="text-xs text-center">
        Форма не собирает персональные данные и не хранит их. Cookies не
        используются.
      </p>
      <p className="text-xs mt-1">Эта шапка не печатается!</p>
      <CharacterTable />
      <button
        type="button"
        onClick={handlePrint}
        className="mt-2 flex flex-col justify-center items-center"
      >
        <PiPrinterThin size={30} />
        <p className="mt-2 text-xs">Напечатать форму</p>
      </button>
    </div>
  );
};

export default Header;
