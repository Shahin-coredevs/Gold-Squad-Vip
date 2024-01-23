/* eslint-disable react/prop-types */
import dashboardicon from "../../../assets/Icon.svg";
import exchangeIcon from "../../../assets/Icon (2).svg"
import marketingIcon from "../../../assets/Icon (3).svg"
import coinIcon from "../../../assets/Icon (4).svg"
import NFTIcon from "../../../assets/Icon (5).svg"
import airdropIcon from "../../../assets/Icon (6).svg"
import resourceIcon from "../../../assets/Icon (7).svg"
import logoutIcon from "../../../assets/Icon (8).svg"
// import topgradient from "../../../assets/top.svg"
import bottomgradient from "../../../assets/bottom.svg"
import { NavLink } from "react-router-dom";

const style = {
  active: "text-white btnGradient w-full  p-3 mb-5 rounded-xl  flex gap-3",
  normal: "text-white   w-full p-3 flex gap-3 mb-5"
};
const Navbar = ({sideBar}) => {
  
  return (
    <div className="">
     
      <div className="py-6  md:w-full overflow-y-auto overflow-hidden h-screen bg-transparent relative">
        {/* navbar content */}
        <header className="w-screen md:w-full flex justify-between p-2 mb-5">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[60px] h-[60px]">
              {/* img */}
              <img
                className="w-full h-full rounded-full"
                src="https://s3-alpha-sig.figma.com/img/5cbd/f47d/f8528e81c2cae73e0839dd15f7f0a83b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKNNaKOjKx557~cNqgxd6t3gDiB17vclSFwcG1dBWBOH4skrA3a4KzQkjjLzZfajZoJaPnLPhvon5inmRuX4BlPdzwBSMoFpyoxZwb3RQ-D4sNNZOu~buv6LklfGeff2pAX5Y2Z2Z1OoH6tHmmYHcIRBLxDWLY4RWDUNwN3zKA6EFIAgn1VPcmooK4jabFcE-jyjTAxUGJ4IcCGoQ7dk9y4alh~wW1zuej3I8yeWUEvnj8SiETkK5bcC1~P1nHc7tGwZj~M8hRsAj~Z3sIzIE3kxUzFfCdhcZDuZYUQQjeyb1KvlS8ArGKCqD2i7T-sgEVqDvEk2HvzEIDpPErn5dA__"
                alt=""
              />
            </div>

            <div>
              <h3 className=" text-white font-bold">Gold Squad VIP</h3>
            </div>
          </div>
           <button   onClick={sideBar} className="z-50  ml-24 block md:hidden">
        <p className="text-4xl cursor-pointer text-red-400">X</p>
      </button>
          
        </header>
       

        <div className="relative z-[2]">
          
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                   isActive
                  ? style["active"]
                  : style["normal"]
              }
            >
              <img src={dashboardicon} alt="" /> Dashboard
            </NavLink>
          
            <NavLink
              to="/exchanges-listing"
              className={({ isActive }) =>
              isActive
             ? style["active"]
             : style["normal"]
              }
            >
              <img src={exchangeIcon} alt="" /> Exchanges Listings
            </NavLink>

            <NavLink
              to="/marketing-moving-news"
              className={({ isActive }) =>
              isActive
             ? style["active"]
             : style["normal"]
              }
            >
              <img src={marketingIcon} alt="" /> Marketing Moving News
            </NavLink>

            <NavLink
              to="/coin-news"
              className={({ isActive }) =>
                   isActive
                  ? style["active"]
                  : style["normal"]
              }
            >
              <img src={coinIcon} alt="" /> Coin News
            </NavLink>

            <NavLink
              to="/nftalpha"
              className={({ isActive }) =>
              isActive
             ? style["active"]
             : style["normal"]
              }
            >
              <img src={NFTIcon} alt="" /> NFT Alpha
            </NavLink>

            <NavLink
              to="/airdrop-alerts"
              className={({ isActive }) =>
                   isActive
                  ? style["active"]
                  : style["normal"]
              }
            >
              <img src={airdropIcon} alt="" /> Airdrops Alerts
            </NavLink>

            <NavLink
              to="/resource-hub"
              className={({ isActive }) =>
              isActive
             ? style["active"]
             : style["normal"]
              }
            >
              <img src={resourceIcon} alt="" /> Resource Hub
            </NavLink>

            <button className=" text-white   w-full p-3 flex gap-3 mb-5"
            >
              <img src={logoutIcon} alt="" /> Log Out
            </button>
          
        </div>
    
        <div className="w-screen top-0 h-full z-[1] absolute ">
        {/* <div className="absolute w-full top-0 left-0 ">
        <img className="w-full" src={topgradient} alt="" />
        </div> */}

        <div className="w-screen absolute bottom-0 left-0">
        <img className="w-full" src={bottomgradient} alt="" />
        </div>

        {/* <div className="absolute top-0 left-0">
          <img src={topgradient} alt="" />
        </div> */}

        </div>

     

      </div>
    </div>
  );
};

export default Navbar;
