import { useLocation } from "react-router-dom";
import DropDown from "./Shared/Navbar/Dropdown/DropDown";
import { notificationData } from "../../data";

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
    <div className="bg-gradient-to-r from-[#0D05527A] to-[#0D055233] mb-5 text-white px-2 py-10 flex justify-between items-center">
      <h3 className="text-lg font-bold">{title[path]}</h3>
      <button  className="w-10 h-10 pr-2 cardBg flex justify-center items-center  border border-borderBottom relative">
        
        <p className="text-red-600 font-bold absolute z-10 top-0  right-1">{notificationData.length}</p>
        <DropDown data={notificationData} type="notification"/>
      </button>
      
    </div>
  );
};

export default Topbar;
