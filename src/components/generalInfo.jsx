import { useState } from 'react';
import logo from '../assets/generalInfoLogo.png';
import spread from '../assets/spreadBtn.png';
export function GeneralInfo({ updateInfo, info }) {
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
          <p className="text-3xl font-bold">General Information</p>
        </div>
        <button onClick={handleShow}>
          <img
            src={spread}
            className={`showGeneralInfo h-auto w-3.5 transition-transform duration-300 ${show ? 'rotate-360' : 'rotate-180'}`}
          />
        </button>
      </div>
      <div className="form-section">
        {show && (
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="fullName" className="text-2xl font-bold">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                defaultValue={info.fullName}
                className="w-full rounded-2xl bg-gray-200 p-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="email" className="text-2xl font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={info.email}
                className="w-full rounded-2xl bg-gray-200 p-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="phoneNumber" className="text-2xl font-bold">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={info.phoneNumber}
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
            <button
              type="submit"
              className={`bg-button-gradient w-fit self-end rounded-full p-3 px-6 text-2xl text-white`}
            >
              Save
            </button>
          </form>
        )}
      </div>
      <div className="relative flex flex-col gap-1 p-2">
        <p className="text-2xl font-bold">{info.fullName}</p>
        <p className="text-2xl">{info.email}</p>
        <p className="text-2xl">{info.phoneNumber}</p>
        <p className="text-2xl">{info.city}</p>
        {info.fullName && info.email && info.phoneNumber && info.city && (
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
