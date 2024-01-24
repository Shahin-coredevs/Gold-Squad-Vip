import folderIcon from "../../assets/FolderIcon.svg";
import DropDown from "../Shared/Navbar/Dropdown/DropDown";

const GridView = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-5 px-4 cursor-pointer">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex mb-7 gap-4 justify-between items-start">
              <img className="w-2/3" src={folderIcon} alt="" />
              <DropDown type="action"/>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg text-[#E1DEFA] font-semibold">
                {item?.title || ""}
              </h1>
              <p className="text-[#7A8AA3] text-sm">{item?.des || ""}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
