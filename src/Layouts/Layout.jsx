import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Topbar from "../Components/Topbar";

const Layout = () => {
  return (
    <div className="bg-primaryBg flex h-full ">
      <div>
        <Navbar />
      </div>

      <div className=" flex-1 h-full">
        <Topbar />
        <div className=" overflow-auto h-[calc(100vh-140px)]">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
