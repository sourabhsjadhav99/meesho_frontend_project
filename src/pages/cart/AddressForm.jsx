import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";

function AddressForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [house, setHouse] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [road, setRoad] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save address information to state or localStorage
    navigate("/payment");
  };
  return (
    <div className="w-[100%] flex justify-end">
      <div className="border w-[35%]  h-full">
        <div className="flex justify-between border-b-2 p-5">
          <p className="text-lg font-semibold">ADD DELIVERY ADDRESS</p>
          <button>
            <RxCross2 className="text-2xl font-bold" />
          </button>
        </div>
        <div className="flex flex-col gap-2 p-5">
          <div className="flex  gap-2 items-center font-semibold">
            <FaPhoneVolume className="text-xl text-sky-600" />
            <h2 className="text-xl">Contact Details</h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[100%] flex flex-col gap-5"
          >
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b rounded p-2 outline-0 outline-none"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border-b rounded p-2 outline-0"
                placeholder="Contact Number"
              />
            </div>
            <div className="flex  gap-2 items-center font-semibold">
              <FaLocationDot className="text-xl text-sky-600" />
              <h2 className="text-xl">Address</h2>
            </div>
            <div>
              <input
                type="text"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                className="w-full border-b rounded p-2 outline-0 outline-none"
                placeholder="House No. / Building name"
              />
            </div>
            <div>
              <input
                type="text"
                value={road}
                onChange={(e) => setRoad(e.target.value)}
                className="w-full border-b rounded p-2 outline-0"
                placeholder="Road Name / Area / Colony"
              />
            </div>
            <div>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full border-b rounded p-2 outline-0"
                placeholder="Pincode"
              />
            </div>
            <div>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border-b rounded p-2 outline-0"
                placeholder="City"
              />
            </div>
            <div>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border-b rounded p-2 outline-0"
                placeholder="State"
              />
            </div>
            <div>
              <button className="flex items-center justify-center gap-2 font-semibold text-lg w-[100%] bg-[#9F2089] p-2 rounded text-white">
                Save Address and Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
