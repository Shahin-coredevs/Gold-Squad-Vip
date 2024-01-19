/* eslint-disable react/prop-types */
import { useEffect,  useState } from "react";
import downArrow from "../../../../assets/downarrow.svg";
import menuIcon from "../../../../assets/MenuIcon.svg";
const DropDown = ({ data = [], getValue, type = "" }) => {
  const [selected, setSelected] = useState({ name: "VIEW MORE", value: "ALL" });
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    if (type != "action") getValue(selected);
  }, [selected]);

  window.addEventListener('click', function(e){   
    if (document.getElementById('clickbox').contains(e.target)){
      return
    } else{
      setIsVisible(false)
    }
  });

  if (type == "action") {
    return (
      <div id="clickbox" className="relative">
        <div onClick={() => setIsVisible(!isVisible)}>
          <img src={menuIcon} alt="" />
        </div>
        <div className={`absolute cardBg flex flex-col ${isVisible ? "" : "hidden"}`}>
          <p className="text-white shrink-0 break-keep">action 1</p>
          <p className="text-white">action 2</p>
          <p className="text-white">action 3</p>
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
