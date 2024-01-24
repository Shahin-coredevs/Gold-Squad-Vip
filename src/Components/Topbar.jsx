/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import DropDown from "./Shared/Navbar/Dropdown/DropDown";
import { notificationData } from "../../data";
import menuIcon from "../assets/Vector.svg"


const title = {
  dashboard: "Dashboard",
  'exchanges-listing': "Exchange Listing",
  'marketing-moving-news': 'Marketing Moving News',
  'coin-news' : "Coin News",
  'nftalpha' : "NFT Alpha",
  'airdrop-alerts': "Airdrop Alerts",
  'resource-hub': "Resource Hub"
};
const Topbar = ({sideBar}) => {
    const location = useLocation();
    const path = location.pathname.slice(1);
  return (
    <div>
       
        <div className="p-6 w-full bg-gradient-to-r from-[#0D05527A] to-[#0D055233] mb-5 text-white py-10 flex justify-between items-center">
      <h3 className="text-lg font-bold">{title[path]}</h3>
     <div className="flex gap-5">
     <button  className="h-10 w-10 pr-2 cardBg flex justify-center items-center  relative">
        
        <p className="text-white m-1 px-2 rounded-lg bg-rose-600 font-bold absolute z-10 -top-4  -right-2 md:-right-3">{notificationData.length}</p>
        <DropDown data={notificationData} type="notification"/>
      </button>
      <button onClick={sideBar} className="block md:hidden">
        <img src={menuIcon} alt="" />
      </button>
      

     </div>
      
    </div>
    </div>
    
  );
};

export default Topbar;
