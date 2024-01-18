import { useLocation } from "react-router-dom";
import notificationsvg from "../assets/Notification-Icon.svg";

const title = {
  dashboard: "Dashboard",
  'exchanges-listing': "Exchange Listing",
  'marketing-moving-news': 'Marketing Moving News',
  'coin-news' : "Coin News",
  'nftalpha' : "NFT Alpha",
  'airdrop-alerts': "Airdrop Alerts",
  'resource-hub': "Resource Hub"
};
const Topbar = () => {
    const location = useLocation();
    const path = location.pathname.slice(1);
  return (
    <div className="bg-gradient-to-r from-[#0D05527A] to-[#0D055233] mb-5 text-white px-2 py-10 flex flex-row justify-between items-center">
      <h3 className="text-lg font-bold">{title[path]}</h3>
      <button className=" w-10 h-10 cardBg flex justify-center items-center  border border-borderBottom relative">
        <img src={notificationsvg} alt="" />
        <p className="text-red-500 absolute z-10 -top-2 right-0">8</p>
      </button>
    </div>
  );
};

export default Topbar;
