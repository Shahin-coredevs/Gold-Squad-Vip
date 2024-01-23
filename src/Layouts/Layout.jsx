import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Topbar from "../Components/Topbar";

const Layout = () => {
  return (
    <div className="bg-primaryBg flex flex-row gap-10 ">
      <div>
        <Navbar />
        
      </div>

      <div className=" flex-1 ">
      <Topbar />
        
        <div className="pr-2 overflow-auto h-[calc(100vh-140px)]">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
