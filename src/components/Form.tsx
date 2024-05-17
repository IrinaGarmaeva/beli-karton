import React, { useState } from "react";

interface FormData {
  surname: string;
  name: string;
  dateOfBirth: string;
  sex: string;
  placeOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  travelDocument: string;
  visaNumber: string;
  dateOfEntry: string;
  placeOfStay: string;
  hostName: string;
  taxIdNumber: string;
  registrationDate: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    surname: "",
    name: "",
    dateOfBirth: "",
    sex: "",
    placeOfBirth: "",
    countryOfBirth: "",
    nationality: "",
    travelDocument: "",
    visaNumber: "",
    dateOfEntry: "",
    placeOfStay: "",
    hostName: "",
    taxIdNumber: "",
    registrationDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center w-3/4 p-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="flex gap-3">
          Surname:
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </label>
        <label>
          Sex:
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
          />
        </label>
        <label>
          Place of Birth:
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
          />
        </label>
        <label>
          Country of Birth:
          <input
            type="text"
            name="countryOfBirth"
            value={formData.countryOfBirth}
            onChange={handleChange}
          />
        </label>
        <label>
          Nationality:
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </label>
        <label>
          Type and number of travel document or other ID:
          <input
            type="text"
            name="travelDocument"
            value={formData.travelDocument}
            onChange={handleChange}
          />
        </label>
        <label>
          Type and number of visa and place of issuance:
          <input
            type="text"
            name="visaNumber"
            value={formData.visaNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Date of entry into the Republic of Serbia:
          <input
            type="date"
            name="dateOfEntry"
            value={formData.dateOfEntry}
            onChange={handleChange}
          />
        </label>
        <label>
          Address of place of stay in the Republic of Serbia:
          <input
            type="text"
            name="placeOfStay"
            value={formData.placeOfStay}
            onChange={handleChange}
          />
        </label>
        <label>
          Surname, given name and personal identification number of the
          landlord/host:
          <input
            type="text"
            name="hostName"
            value={formData.hostName}
            onChange={handleChange}
          />
        </label>
        <label>
          Tax ID Number:
          <input
            type="text"
            name="taxIdNumber"
            value={formData.taxIdNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Date of Registration:
          <input
            type="date"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
