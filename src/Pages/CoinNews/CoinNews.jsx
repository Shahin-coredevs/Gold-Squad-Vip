import { useEffect, useState } from "react";
import linkArrow from "../../assets/External.svg";
import DropDown from "../../Components/Shared/Navbar/Dropdown/DropDown";
import Pagination from "../../Components/Shared/Pagination";

const CoinNews = () => {
  const [filter, setFilter] = useState("ALL");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeName,setTypeName] =useState([])
 

  useEffect(() => {
    fetch("coinNews.json")
      .then((res) => res.json())
      .then((data) => {
        const allTypeName = data.map(e=> (e.type))
        const typeName = [...new Set(allTypeName)]
        setTypeName(typeName); 
        return filter == "ALL" ? data : data.filter((e) => e.type == filter);
      })
      .then((data) => {setData(data)});
      // console.log(filter);
  
  }, [filter]);
  

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const typeNameForLarge = typeName.slice(0,5)
  const typeNameForLargeRemine = typeName.slice(typeNameForLarge.length,typeName.length)
 



  return (
    <div className="p-4 contentBG border  text-white  border-slate-800 my-5">
      <div className="flex flex-col md:flex-row justify-between  border-b-2 border-borderBottom pb-2">
        <h3 className="text-xl font-semibold ">Coin News</h3>
        <div className="flex justify-between items-center  gap-8 text-sm">
        <p className={`${filter == "ALL" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("ALL")} >All</p>
          {/* 
           
          <p className={`${filter == "XRP" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("XRP")}>XRP</p>
          <p className={`${filter == "HBAR" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("HBAR")}>HBAR</p>
          <p className={`${filter == "ADA" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("ADA")}>ADA</p>
          <p className={`${filter == "ELGO" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("ELGO")}>ELGO</p>
          <p className={`${filter == "ETH" ? "underline" : ""} cursor-pointer`} onClick={() => setFilter("ETH")}>ETH</p> */}
          {
            typeNameForLarge.map((e, index)=> {
             return <p key={index} className={`${filter == e ? "underline" : ""} cursor-pointer`} onClick={() => setFilter(e)} >{e}</p>
            })
          }
          <div className="flex  gap-2 items-center uppercase">
            <DropDown
              defaultValue={filter}
              data={typeNameForLargeRemine}
              getValue={(e) => setFilter(e)}
            />
          </div>
        </div>
      </div>

      {currentData.map((data, index) => (
        <div key={index} className="my-4 border-b-2 border-borderBottom pb-4">
          <p className="text-[#718096] mb-2">{data.date}</p>
         <div className="flex justify-between gap-5 items-center">
         <div className="flex justify-between items-center ">
            <p>{data.description} </p>
          </div>
          <div className="flex justify-between items-center gap-10">
              <figure>
                <img src={linkArrow} alt="" />
              </figure>
              <p className="w-20 flex justify-end  text-[#4BC688]">{data.type}</p>
            </div>
         </div>
        </div>
      ))}
      <Pagination 
       currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange} />
    </div>
  );
};

export default CoinNews;
