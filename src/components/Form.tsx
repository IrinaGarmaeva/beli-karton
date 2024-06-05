import { useState, useEffect } from "react";
import PrinterIcon from "../assets/icons/icon-printer.png";

const Form = () => {
  const [registrationDate, setRegistrationDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedToday = `${yyyy}-${mm}-${dd}`;
    setRegistrationDate(formattedToday);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col justify-center text-xxs w-full">
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
          <img
            src={PrinterIcon}
            alt="Иконка печати документа"
            className="w-5"
          />
          <p className="mt-2 text-xs">Напечатать форму</p>
        </button>
      </div>
      <p className="text-right text-xs pb-1">Образац 1.</p>
      <div className="flex flex-col justify-center p-2 border border-1 border-black border-dotted w-full">
        <div className="flex justify-center relative">
          <p className="uppercase text-center pb-1">
            ПРИЈАВА БОРАВИШТА СТРАНЦА
          </p>
          <p className="absolute right-9">Серијски број/Serial number:</p>
        </div>
        <p className="uppercase text-center pb-1">
          REGISTRATION OF PLACE OF STAY
        </p>
        <form className="rounded shadow-md">
          <table className="min-w-full border border-1 border-black">
            <tbody>
              <tr className="w-full border border-black">
                <td className="p-2 w-1/5 border border-black">
                  <label>Презиме - Surname</label>
                </td>
                <td className="p-2 w-4/5 border border-black">
                  <input
                    type="text"
                    name="surname"
                    className="p-1 w-full text-sm"
                    placeholder="Введите ФАМИЛИЮ как в загранпаспорте"
                    required
                  />
                </td>
              </tr>
              <tr className="w-full border border-black">
                <td className="p-2 w-1/5 border border-black">
                  <label>Име - Name</label>
                </td>
                <td className="p-2 w-4/5 border border-black">
                  <input
                    type="text"
                    name="name"
                    className="p-1 w-full text-sm"
                    placeholder="Введите ИМЯ как в загранпаспорте"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <table className="min-w-full border border-1 border-black">
            <tbody>
              <tr className="border border-black">
                <td className="p-2 w-2/5 border border-black">
                  <div className="flex flex-col">
                    <span>Датум рођења</span>
                    <span>Date of Birth</span>
                  </div>
                </td>
                <td className="p-2 w-3/5 border border-black">
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="p-1 text-sm"
                    required
                  />
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Пол</span>
                    <span>Sex</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <select
                    name="sex"
                    className="p-1 text-sm print:border-none"
                    required
                  >
                    <option value="" disabled selected>
                      Выберите пол
                    </option>
                    <option value="Muški">Muški</option>
                    <option value="Ženski">Ženski</option>
                  </select>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Место и држава рођења</span>
                    <span>Place and Country of Birth</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <input
                    type="text"
                    name="birthPlace"
                    className="p-1 w-full text-sm"
                    defaultValue="Russia"
                    placeholder="Введите страну рождения как в загранпаспорте"
                    required
                  />
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Држављанство</span>
                    <span>Nationality</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <input
                    type="text"
                    name="nationality"
                    className="p-1 w-full text-sm"
                    defaultValue="Russian"
                    placeholder="Введите гражданство"
                  />
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Врста и број путне исправе</span>
                    <span>Type and Number of Travel Document</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <input
                    type="text"
                    name="travelDocument"
                    className="p-1 w-full text-sm"
                    placeholder="Введите номер загранпаспорта"
                  />
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Врста и број визе и место издавања</span>
                    <span>Type and number of visa and place of issuance</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <textarea
                    name="visa"
                    className="px-1 w-full text-sm h-12 overflow-hidden resize-none"
                  ></textarea>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Датум и место уласка у Србију</span>
                    <span>Date and Place of Entry to Serbia</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <input
                    type="date"
                    className="p-1 text-sm"
                    value={registrationDate}
                    onChange={(e) => setRegistrationDate(e.target.value)}
                    required
                  />
                  <select
                    name="borderPoint"
                    className="p-1 w-4/5 text-sm print:border-none"
                    required
                  >
                    <option value="" disabled selected>
                      Выберите пограничный пункт
                    </option>
                    <option value="Sremska Rača">Sremska Rača</option>
                    <option value="Beograd">Beograd</option>
                    <option value="Bačka Palanka">Bačka Palanka</option>
                    <option value="Bajina Basta">Bajina Basta</option>
                    <option value="Brodarevo">Brodarevo</option>
                    <option value="Gostun">Gostun</option>
                    <option value="Kotroman">Kotroman</option>
                    <option value="Ljubovija">Ljubovija</option>
                    <option value="Јамеna">Јамеna</option>
                    <option value="Uvac">Uvac</option>
                    <option value="Subotica">Subotica</option>
                  </select>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Адреса боравишта у Републици Србији</span>
                    <span>
                      Аddress of place of stay in the Republic of Serbia
                    </span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <textarea
                    name="address"
                    className="px-1 w-full text-sm h-14 overflow-hidden resize-none"
                    placeholder="Введите адрес регистрации в Сербии"
                  ></textarea>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>
                      Податак о станодавцу (презиме и име и ЈМБГ, односно назив
                      правног лица или предузетника и ПИБ)
                    </span>
                    <span>
                      Surname, given name and personal identification number of
                      the landlord/host ie, name of legal entity or entrepreneur
                      and tax ID number.
                    </span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <input
                    type="text"
                    name="landlordName"
                    className="p-1 w-full text-sm"
                    placeholder="Введите фамилию и имя арендодателя"
                    required
                  />
                  <input
                    type="text"
                    name="landlordInfo"
                    className="p-1 w-full text-sm"
                    placeholder="Введите номер ID-карты арендодателя,пример JMBG0123456789012"
                    required
                  />
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Датум пријаве</span>
                    <span>Date of Registration</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <input
                    type="date"
                    name="registrationDate"
                    className="p-1 text-sm"
                    value={registrationDate}
                    onChange={(e) => setRegistrationDate(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Напомена</span>
                    <span>Note</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <textarea name="note" className="p-1 w-full h-20"></textarea>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span className="pb-3">Потпис подносиоца пријаве</span>
                    <span>Signature of the person who registers</span>
                  </div>
                </td>
                <td className="p-2 border border-black">
                  <textarea name="note" className="p-2 w-full"></textarea>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black"></td>
                <td className="p-2 border border-black">
                  <div className="flex flex-col items-center">
                    <p className="pt-8 w-full text-center">
                      ________________________________________
                    </p>
                    <span>
                      (потпис овлашћеног лица - signature of the authorized
                      person)
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Form;
