const Form = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col justify-center text-xxs w-full">
      <p className="text-right">Образац 1.</p>
      <div className="flex flex-col justify-center p-2 border border-1 border-black border-dotted w-full">
        <div className="flex justify-center relative">
          <p className="uppercase text-center">ПРИЈАВА БОРАВИШТА СТРАНЦА</p>
          <p className="absolute right-7">Серијски број/Serial number:</p>
        </div>
        <p className="uppercase text-center">REGISTRATION OF PLACE OF STAY</p>
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
                    className="p-1 w-full text-sm"
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
                  <input type="text" name="sex" className="p-1 w-full text-sm" />
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
                    defaultValue="Rusija"
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
                    defaultValue="Rusko"
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
                    className="p-2 w-full"
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
                <td className="p-5 border border-black">
                  <input type="text" name="visa" className="p-4 w-full" />
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
                    type="text"
                    name="entryDatePlace"
                    className="p-2 w-full"
                  />
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 border border-black">
                  <div className="flex flex-col">
                    <span>Адреса боравишта у Републици Србији</span>
                    <span>Аddress of place of stay in the Republic of Serbia</span>
                  </div>
                </td>
                <td className="p-7 border border-black">
                  <input type="text" name="address" className="p-2 w-full" />
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
                    name="landlordInfo"
                    className="p-2 w-full"
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
                    className="p-2 w-full"
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
                <td className="p-8 border border-black">
                  <textarea name="note" className="p-2 w-full"></textarea>
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
                    <p className="pt-7 w-full text-center">________________________________________</p>
                    <span>
                      (потпис овлашћеног лица - signature of the authorized
                      person)
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="button"
            onClick={handlePrint}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Print Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
