import folderIcon from "../../assets/FolderIcon.svg"
import menuIcon from "../../assets/MenuIcon.svg"
import DropDown from "../Shared/Navbar/Dropdown/DropDown";

const ListView = ({data=[]}) => {
    return (
        data.map((item,index)=> {
            return (

        <div key={index} className=" p-4 rounded-lg flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <img src={folderIcon} alt="" />
          <div className="space-y-2">
          <h1 className="text-lg text-[#E1DEFA] font-semibold">{item?.title || ""}</h1>
          <p className="text-[#7A8AA3] text-sm">{item?.des || ""}</p>
          </div>
        </div>
        <DropDown type="action"/>
      </div>
            )
        })
    );
};

export default ListView;