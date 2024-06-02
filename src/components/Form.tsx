import { FC } from "react";

const Form: FC = () => {
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
              <tr className="w-full border border-b-1 border-black">
                <td className="p-2 w-1/5 border border-r-1 border-black">
                  <label>Презиме - Surname</label>
                </td>
                <td className="p-2 w-4/5">
                  <input
                    type="text"
                    name="surname"
                    className="p-2 w-full"
                    placeholder="Введите ФАМИЛИЮ как в загранпаспорте"
                  />
                </td>
              </tr>
              <tr className="w-full">
                <td className="p-2 w-1/5 border border-r-1 border-black">
                  <label>Име - Name</label>
                </td>
                <td className="p-2 w-4/5">
                  <input
                    type="text"
                    name="name"
                    className="p-2 w-full"
                    placeholder="Введите ИМЯ как в загранпаспорте"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="min-w-full border border-1 border-black">
            <tbody>
              <tr className="border border-r-1 border-black">
                <td className="p-2 w-2/5 border border-r-1 border-black">
                  <label>Датум рођења Date of Birth</label>
                </td>
                <td className="p-2 w-3/5">
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>Пол (Sex):</label>
                </td>
                <td className="p-2">
                  <input type="text" name="sex" className="border p-2 w-full" />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>
                    Место и држава рођења (Place and Country of Birth):
                  </label>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    name="birthPlace"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>Држављанство (Nationality):</label>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    name="nationality"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>
                    Врста и број путне исправе (Type and Number of Travel
                    Document):
                  </label>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    name="travelDocument"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>Врста и број визе (Type and Number of Visa):</label>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    name="visa"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>
                    Датум и место уласка у Србију (Date and Place of Entry to
                    Serbia):
                  </label>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    name="entryDatePlace"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>Адреса боравишта (Address of Place of Stay):</label>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    name="address"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>Податак о станодавцу (Landlord Information):</label>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    name="landlordInfo"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>Датум пријаве (Date of Registration):</label>
                </td>
                <td className="p-2">
                  <input
                    type="date"
                    name="registrationDate"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label>Напомена (Note):</label>
                </td>
                <td className="p-2">
                  <textarea
                    name="note"
                    className="border p-2 w-full"
                  ></textarea>
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
