/* eslint-disable react/prop-types */
import { useEffect,  useRef,  useState } from "react";
import downArrow from "../../../../assets/downarrow.svg";
import menuIcon from "../../../../assets/MenuIcon.svg";
const DropDown = ({ data = [], getValue, type = "" }) => {
  const [selected, setSelected] = useState({ name: "VIEW MORE", value: "ALL" });
  const [isVisible, setIsVisible] = useState(false);
  const dropRef = useRef();
  useEffect(() => {
      // Close the dropdown when the user clicks outside of it
      function handleClickOutside(event) {
        if (dropRef.current && !dropRef.current.contains(event.target)) {
            setIsVisible(false);
            // setClicked(false);
        }
    }
    // Add event listener when the dropdown is open
    if (isVisible) {
        document.addEventListener('mousedown', handleClickOutside);
       
    } else {
        // Remove the event listener when the dropdown is closed
        document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [isVisible]);

  useEffect(() => {
    if (type != "action") getValue(selected);
  }, [selected]);

  if (type == "action") {
    return (
      <div ref={dropRef} className="relative ">
        <div className="cursor-pointer"  onClick={() => setIsVisible(!isVisible)}>
          <img src={menuIcon} alt="" />
        </div>
        <div   className={`cursor-pointer absolute top-5 right-4 cardBg text-sm border border-borderBottom rounded-lg w-28   flex flex-col bg-[#1E2033] ${isVisible ? "" : "hidden"}`}>
          <p className="text-white px-3 py-2  hover:bg-[#490FF0] ">Add File</p>
          <p className="text-white my-5  px-3 py-2  hover:bg-[#490FF0]">Add Folder</p>
          <p className="text-red-500   px-3 py-2  hover:bg-[#490FF0]">Delete</p>
        </div>
      </div>
    );
  }
  

  return (
    <div className="relative">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="cardBg min-w-28 justify-between flex gap-2 text-white py-2 px-1 cursor-pointer"
      >
        {selected.name}
        <img src={downArrow} alt="" />
      </div>
      {isVisible && (
        <div className="absolute w-full top-10 bg-[#1E2033] shadow shadow-[#0000004d] rounded-lg px-3 py-2">
          {data?.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setSelected(item);
                  setIsVisible(false);
                }}
                key={index}
                className=""
              >
                <p className="text-sm hover:border-buttonBorder  mb-5 w-full">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
