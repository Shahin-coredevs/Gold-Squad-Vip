/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect,  useRef,  useState } from "react";
import downArrow from "../../../../assets/downarrow.svg";
import menuIcon from "../../../../assets/MenuIcon.svg";
import notificationsvg from "../../../../assets/Notification-Icon.svg"
const DropDown = ({ data = [], getValue, type = "" }) => {
  const [selected, setSelected] = useState("ALL");
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
    if (type != "action" && type != "notification") getValue(selected);
  }, [selected]);
 

          // Resourcehub Menu Dropdown action  
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

              // notification dropdown 
  if (type == "notification") {
    return (
      <div ref={dropRef} className="relative  z-20 " onClick={() => setIsVisible(!isVisible)}>
        <div className="cursor-pointer"  >
        <img className=" w-10 h-10" src={notificationsvg} alt="" />
        </div>
        <div   className={` cursor-pointer absolute top-10 right-1 md:top-10 md:right-5 cardBg text-sm border border-borderBottom rounded-lg w-[250px] md:w-[400px] p-2 flex flex-col  bg-[#1E2033] ${isVisible ? "" : "hidden"}`}>
        {
          data.map((item,index)=>  (
           <div key={index} className="flex justify-between  px-3 py-2 rounded-lg hover:bg-[#490FF0]">
            <div className="flex gap-3 mb-2">
              <img src={notificationsvg} alt="" />
              <p className="text-left w-40 md:w-60 truncate">{item.description}</p>
            </div>
            <h6 className="text-end w-fit hidden md:block md:w-24">{item.time}</h6>
            </div>
          ))
         }
        </div>
      </div>
    );
  }


  
          // Coin News dropdown 

       
  return (
    <div className="relative">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="cardBg min-w-28 justify-between flex gap-2 text-white py-2 px-1 cursor-pointer"
      >
        {selected}
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
                  {item}
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
