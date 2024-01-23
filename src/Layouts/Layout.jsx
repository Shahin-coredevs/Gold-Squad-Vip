import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Topbar from "../Components/Topbar";
import { useEffect, useState } from "react";

const Layout = () => {
  const [sideBar, setSidebar] = useState(false);
  const location = useLocation()

  useEffect(()=> {
    setSidebar(false)
  },[location])

  const sideBarHandler = () => {
    
    setSidebar(!sideBar);
    console.log(sideBar);
  }
  return (
    <div className="w-screen h-full bg-primaryBg flex flex-row overflow-hidden">
      <div className="block md:hidden">
       {sideBar && <Navbar sideBar={sideBarHandler} />}
      </div>
      <div className="hidden md:block overflow-hidden">
        <Navbar />
      </div>
      <div className="w-full md:w-full h-full flex-1">
      <Topbar sideBar={sideBarHandler} />
        
        <div className=" overflow-auto h-[calc(100vh-140px)]">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;