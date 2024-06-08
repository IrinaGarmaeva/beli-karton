import { useState, useEffect } from "react";
import Header from "./Header";
import { borderPoints } from "../utils/constants";

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

  return (
    <div className="flex flex-col justify-center text-xxs w-full">
      <Header />
      <div id="form-container">
        <p className="text-right text-xs pb-1">Образац 1.</p>
        <div className="flex flex-col justify-center p-2 border border-1 border-gray-700 border-dotted w-full">
          <div className="flex justify-center relative">
            <p className="uppercase text-center pb-1">
              ПРИЈАВА БОРАВИШТА СТРАНЦА
            </p>
            <p className="absolute right-9">Серијски број/Serial number:</p>
          </div>
          <p className="uppercase text-center pb-1">
            REGISTRATION OF PLACE OF STAY
          </p>
          <form className="rounded">
            <table className="min-w-full border border-1 border-gray-700">
              <tbody>
                <tr className="w-full border border-gray-700">
                  <td className="p-2 w-1/5 border border-gray-700">
                    <label>Презиме - Surname</label>
                  </td>
                  <td className="p-2 w-4/5 border border-gray-700">
                    <input
                      type="text"
                      name="surname"
                      className="p-1 w-full text-sm bg-white placeholder-red-500"
                      placeholder="Введите ФАМИЛИЮ как в загранпаспорте"
                      required
                    />
                  </td>
                </tr>
                <tr className="w-full border border-gray-700">
                  <td className="p-2 w-1/5 border border-gray-700">
                    <label>Име - Name</label>
                  </td>
                  <td className="p-2 w-4/5 border border-gray-700">
                    <input
                      type="text"
                      name="name"
                      className="p-1 w-full text-sm placeholder-red-500"
                      placeholder="Введите ИМЯ как в загранпаспорте"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="min-w-full border border-1 border-gray-700">
              <tbody>
                <tr className="border border-gray-700">
                  <td className="p-2 w-2/5 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Датум рођења</span>
                      <span>Date of Birth</span>
                    </div>
                  </td>
                  <td className="p-2 w-3/5 border border-gray-700">
                    <div className="flex items-center gap-4">
                      <input
                        type="date"
                        name="dateOfBirth"
                        className="p-1 text-sm cursor-pointer bg-transparent"
                        required
                      />
                      <p className="text-sm text-red-500 print:hidden">
                        Введите дату рождения
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Пол</span>
                      <span>Sex</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <div className="flex items-center gap-4">
                      <select
                        name="sex"
                        className="p-1 text-sm print:border-none cursor-pointer bg-transparent"
                        required
                      >
                        <option className="bg-transparent" value="Muški">
                          Muški
                        </option>
                        <option className="bg-transparent" value="Ženski">
                          Ženski
                        </option>
                      </select>
                      <p className="text-sm text-red-500 print:hidden">
                        Выберите пол
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Место и држава рођења</span>
                      <span>Place and Country of Birth</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="birthPlace"
                        className="p-1 w-full text-sm placeholder-red-500"
                        defaultValue="Russia"
                        required
                      />
                      <p className="text-sm text-red-500 print:hidden text-center">
                        Укажите место рождения как в загранпаспорте
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Држављанство</span>
                      <span>Nationality</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="nationality"
                        className="p-1 w-full text-sm placeholder-red-500"
                        defaultValue="Russian"
                      />
                      <p className="text-sm text-red-500 print:hidden text-center">
                        Укажите гражданство как в загранпаспорте
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Врста и број путне исправе</span>
                      <span>Type and Number of Travel Document</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <input
                      type="text"
                      name="travelDocument"
                      className="p-1 w-full text-sm placeholder-red-500"
                      placeholder="Введите номер загранпаспорта"
                    />
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Врста и број визе и место издавања</span>
                      <span>Type and number of visa and place of issuance</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <textarea
                      name="visa"
                      className="px-1 w-full text-sm h-8 overflow-hidden resize-none"
                    ></textarea>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Датум и место уласка у Србију</span>
                      <span>Date and Place of Entry to Serbia</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <div className="flex">
                      <input
                        type="date"
                        className="p-1 text-sm cursor-pointer bg-transparent"
                        value={registrationDate}
                        onChange={(e) => setRegistrationDate(e.target.value)}
                        required
                      />
                      <select
                        name="borderPoint"
                        className="p-1 w-4/5 text-sm print:border-none cursor-pointer bg-transparent"
                        required
                      >
                        {borderPoints.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                            selected={option.selected}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Адреса боравишта у Републици Србији</span>
                      <span>
                        Аddress of place of stay in the Republic of Serbia
                      </span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <textarea
                      name="address"
                      className="px-1 w-full text-sm h-14 overflow-hidden resize-none placeholder-red-500"
                      placeholder="Введите адрес регистрации в Сербии"
                    ></textarea>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>
                        Податак о станодавцу (презиме и име и ЈМБГ, односно
                        назив правног лица или предузетника и ПИБ)
                      </span>
                      <span>
                        Surname, given name and personal identification number
                        of the landlord/host ie, name of legal entity or
                        entrepreneur and tax ID number.
                      </span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <input
                      type="text"
                      name="landlordName"
                      className="p-1 w-full text-sm placeholder-red-500"
                      placeholder="Введите фамилию и имя арендодателя"
                      required
                    />
                    <input
                      type="text"
                      name="landlordInfo"
                      className="p-1 w-full text-sm placeholder-red-500"
                      placeholder="Введите номер ID-карты арендодателя,пример JMBG0123456789012"
                      required
                    />
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Датум пријаве</span>
                      <span>Date of Registration</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <div className="flex items-center gap-4">
                      <input
                        type="date"
                        name="registrationDate"
                        className="p-1 text-sm cursor-pointer bg-transparent"
                        value={registrationDate}
                        onChange={(e) => setRegistrationDate(e.target.value)}
                        required
                      />
                      <div className="text-sm text-red-500 print:hidden flex flex-col">
                        <p>Укажите дату регистрации</p>
                        <span>Автоматически стоит текущая дата</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span>Напомена</span>
                      <span>Note</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <textarea className="p-1 w-full h-8"></textarea>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col">
                      <span className="pb-3">Потпис подносиоца пријаве</span>
                      <span>Signature of the person who registers</span>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-700">
                    <textarea className="p-2 w-full"></textarea>
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-2 border border-gray-700"></td>
                  <td className="p-2 border border-gray-700">
                    <div className="flex flex-col items-center">
                      <p className="pt-5 w-full text-center">
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
      <div className="flex justify-center mt-4 print:hidden"></div>
    </div>
  );
};

export default Form;
