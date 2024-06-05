import PrinterIcon from "../assets/icons/icon-printer.png";

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
        используются
      </p>
      <button
        type="button"
        onClick={handlePrint}
        className="mt-2 flex flex-col justify-center items-center"
      >
        <img src={PrinterIcon} alt="Иконка печати документа" className="w-5" />
        <p className="mt-2 text-xs">Напечатать форму</p>
      </button>
    </div>
  );
};

export default Header;
