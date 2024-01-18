import { useEffect, useState } from "react";

import linkArrow from "../../assets/External.svg";
import DropDown from "../../Components/Shared/Navbar/Dropdown/DropDown";
import { dropdown } from "../../../data";
const CoinNews = () => {
  const [filter, setFilter] = useState("ALL");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("coinNews.json")
      .then((res) => res.json())
      .then((data) => {
        return filter == "ALL" ? data : data.filter((e) => e.type == filter);
      })
      .then((data) => setData(data));
    console.log(filter);
  }, [filter]);

  return (
    <div className="p-4 contentBG border  text-white  border-slate-800 my-5">
      <div className="flex justify-between items-center border-b-2 border-borderBottom pb-2">
        <h3 className="text-xl font-semibold ">Coin News</h3>
        <div className="flex justify-between items-center  gap-8 text-sm">
          <p className={`${filter == "ALL" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("ALL")} >All</p>
          <p className={`${filter == "XRP" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("XRP")}>XRP</p>
          <p className={`${filter == "HBAR" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("HBAR")}>HBAR</p>
          <p className={`${filter == "ADA" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("ADA")}> ADA</p>
          <p
            className={`${filter == "ELGO" ? "underline" : ""} cursor-pointer`}
            onClick={() => setFilter("ELGO")}
          >
            ELGO
          </p>
          <p
            className={`${filter == "ETH" ? "underline" : ""} cursor-pointer`}
            onClick={() => setFilter("ETH")}
          >
            ETH
          </p>
          <div className="flex  gap-2 items-center uppercase">
            <DropDown
              defaultValue={filter}
              data={dropdown}
              getValue={(e) => setFilter(e.value)}
            />
          </div>
        </div>
      </div>

      {data.map((data, index) => (
        <div key={index} className="my-4 border-b-2 border-borderBottom pb-4">
          <p className="text-[#718096] mb-2">{data.date}</p>
          <div className="flex justify-between items-center ">
            <p>{data.description} </p>
            <div className="flex gap-10">
              <figure>
                <img src={linkArrow} alt="" />
              </figure>
              <p className="w-20 text-[#4BC688]">{data.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoinNews;
