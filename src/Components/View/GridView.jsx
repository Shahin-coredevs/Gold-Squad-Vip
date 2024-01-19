import folderIcon from "../../assets/FolderIcon.svg";
import menuIcon from "../../assets/MenuIcon.svg";

const GridView = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-5 gap-10 py-5 px-4">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex mb-7 gap-4 justify-between items-start">
              <img className="w-2/3" src={folderIcon} alt="" />
              <img src={menuIcon} alt="" />
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
