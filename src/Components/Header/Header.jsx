import { useState } from "react";
import arrow from "../../assets/icon-arrow.svg";
import validateIpAddress from "../../Utils/IPRegex";
import GetLocation from "../../Utils/GetLocation";
import toast from "react-hot-toast";
import Map from "../Map/Map";
const Header = () => {
  const [ipAddress, setIpAddress] = useState(null);
  const [ipData, setIpData] = useState(null);

  const getLocationByIP = async () => {
    try {
      if (validateIpAddress(ipAddress)) {
        const res = await GetLocation(ipAddress);
        setIpData(res);
      } else {
        toast.error("Invalid IP Address");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="relative flex justify-center items-center flex-col bg-mobile bg-cover md:bg-desktop">
        <h1 className="text-center text-3xl font-medium text-white font-mdSemi py-10">
          IP Address Tracker
        </h1>
        <div className="flex items-center rounded-md overflow-hidden w-10/12 sm:w-6/12">
          <input
            type="text"
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="Search for any IP address"
            className="text-start p-3 outline-none font-mdSemi px-4 py-4 w-full text-sm text-gray-700 bg-white border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            onClick={() => {
              getLocationByIP();
            }}
            className="bg-black hover:bg-gray-600 p-5 text-white font-bold rounded-r-md"
          >
            <span className="text-white h-full">
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>

        <div className="w-10/12 flex justify-between items-center bg-white outer-shadow translate-y-1/4 md:translate-y-1/2 rounded-2xl z-10">
          <div className="flex text-center md:text-left gap-6 md:gap-0 flex-col md:flex-row items-center justify-around w-full p-4 rounded-md">
            <div>
              <h2 className="font-bold text-xs font-mdBold text-gray-500">
                IP ADDRESS
              </h2>
              {ipData !== null ? (
                <p className="text-black text-xl font-mdBold mt-2">
                  {ipData?.ip}
                </p>
              ) : (
                "-"
              )}
            </div>
            <div className="hidden md:block w-[0.5px] h-20 bg-gray-400"></div>
            <div>
              <h2 className="font-bold text-xs font-mdBold text-gray-500">
                LOCATION
              </h2>
              {ipData !== null ? (
                <p className="text-black text-xl font-mdBold mt-2">
                  {ipData?.location?.city}, {ipData?.location?.country}
                </p>
              ) : (
                "-"
              )}
            </div>
            <div className="hidden md:block w-[0.5px] h-20 bg-gray-400"></div>
            <div>
              <h2 className="font-bold text-xs font-mdBold text-gray-500">
                TIMEZONE
              </h2>
              {ipData !== null ? (
                <p className="text-black text-xl font-mdBold mt-2">
                  UTC {ipData?.location?.timezone}
                </p>
              ) : (
                "-"
              )}
            </div>
            <div className="hidden md:block w-[0.5px] h-20 bg-gray-400"></div>
            <div>
              <h2 className="font-bold text-xs font-mdBold text-gray-500">
                ISP
              </h2>
              {ipData !== null ? (
                <p className="text-black text-xl font-mdBold mt-2">
                  {ipData?.isp}
                </p>
              ) : (
                "-"
              )}
            </div>
          </div>
        </div>
      </div>
      <Map
        latitude={ipData?.location?.lat}
        longitude={ipData?.location?.lng}
        ipAddress={ipData}
      />
    </>
  );
};

export default Header;
