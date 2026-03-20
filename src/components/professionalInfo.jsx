import { useState } from 'react';
import logo from '../assets/professionalLogo.png';
import spread from '../assets/spreadBtn.png';
export function ProfessionalInfo({ updateInfo, info }) {
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
          <p className="text-3xl font-bold">Professional Experience</p>
        </div>
        <button onClick={handleShow}>
          <img
            src={spread}
            className={`showProfessionalInfo h-auto w-3.5 transition-transform duration-300 ${show ? 'rotate-0' : 'rotate-180'}`}
          />
        </button>
      </div>
      <div className="form-section">
        {show && (
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="jobTitle" className="text-2xl font-bold">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                defaultValue={info.jobTitle}
                className="w-full rounded-2xl bg-gray-200 p-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="company" className="text-2xl font-bold">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                defaultValue={info.company}
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
            <div className="flex flex-col gap-2.5">
              <label htmlFor="description" className="text-2xl font-bold">
                Description
              </label>
              <textarea
                required
                name="description"
                id="description"
                defaultValue={info.description}
                className="h-24 w-full overflow-y-auto rounded-2xl bg-gray-200 p-3"
              ></textarea>
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
        <p className="text-2xl font-bold">{info.jobTitle}</p>
        <p className="text-2xl">{info.company}</p>

        {info.startDate && info.endDate && (
          <p className="text-2xl">{info.startDate + ' - ' + info.endDate}</p>
        )}

        {info.jobTitle &&
          info.company &&
          info.startDate &&
          info.endDate &&
          info.description && (
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
