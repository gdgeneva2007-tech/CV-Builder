import { useState } from 'react';
import logo from '../assets/educationLogo.png';
import spread from '../assets/spreadBtn.png';
export function EducationInfo({ updateInfo, info }) {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  function handleSave(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    updateInfo(data);
    handleShow();
  }
  function handleEdit() {
    setShow(true);
  }
  return (
    <div className="flex flex-col rounded-2xl bg-white p-4 shadow-2xl">
      <div className="flex w-full items-center justify-between border-b-4 border-gray-300 p-3">
        <div className="flex gap-4">
          <img src={logo} className="h-auto w-5 shrink-0 object-contain" />
          <p className="text-3xl font-bold">Education Experience</p>
        </div>
        <button onClick={handleShow}>
          <img
            src={spread}
            className={`showEducationInfo h-auto w-3.5 transition-transform duration-300 ${show ? 'rotate-0' : 'rotate-180'}`}
          />
        </button>
      </div>
      <div className="form-section">
        {show && (
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="degree" className="text-2xl font-bold">
                Degree
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                defaultValue={info.degree}
                className="w-full rounded-2xl bg-gray-200 p-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="school" className="text-2xl font-bold">
                School
              </label>
              <input
                type="text"
                id="school"
                name="school"
                defaultValue={info.school}
                className="w-full rounded-2xl bg-gray-200 p-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="city" className="text-2xl font-bold">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                defaultValue={info.city}
                className="w-full rounded-2xl bg-gray-200 p-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="country" className="text-2xl font-bold">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                defaultValue={info.country}
                className="w-full rounded-2xl bg-gray-200 p-3"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="startDate" className="text-2xl font-bold">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  defaultValue={info.startDate}
                  className="rounded-2xl bg-gray-200 p-3"
                  required
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="endDate" className="text-2xl font-bold">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  defaultValue={info.endDate}
                  className="rounded-2xl bg-gray-200 p-3"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-button-gradient w-fit self-end rounded-full p-3 px-6 text-2xl text-white"
            >
              Save
            </button>
          </form>
        )}
      </div>
      <div className="relative flex flex-col gap-1 p-2">
        <p className="text-2xl font-bold">{info.degree}</p>
        <p className="text-2xl">{info.school}</p>
        {info.city && info.country && (
          <p className="text-2xl">{info.city + ', ' + info.country}</p>
        )}

        {info.startDate && info.endDate && (
          <p className="text-2xl">{info.startDate + ' - ' + info.endDate}</p>
        )}

        {info.degree &&
          info.school &&
          info.city &&
          info.country &&
          info.startDate &&
          info.endDate && (
            <button
              onClick={handleEdit}
              className="bg-button-gradient absolute top-6 right-2 w-fit rounded-full p-3 px-6 text-2xl text-white"
            >
              Edit
            </button>
          )}
      </div>
    </div>
  );
}
