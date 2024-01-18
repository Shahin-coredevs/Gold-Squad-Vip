
import { useEffect, useState } from "react"



const ExchangesListing = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
   fetch('exchageListing.json')
   .then(res=>res.json())
   .then(data=>setData(data))
  },[])


  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

    return (
        <div className="p-4 contentBG border  text-white  border-slate-800 my-5">
           <h3 className="text-xl font-semibold border-b-2 border-borderBottom pb-2">Exchange Listings</h3>
           <div>
        {currentData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b-2 border-borderBottom"
          >
            <div className="my-4 flex justify-center items-center gap-4">
              <figure className="w-6 h-6">
                <img className="h-full wifull" src={item.image} alt="" />
              </figure>
              <h3 className="text-white text-sm">
               {item.title}
              </h3>
            </div>
            <div className="flex justify-center text-[#718096] font-semibold text-[12px]">
             {item.time}
            </div>
          </div>
        ))}
      </div>
     

      <div className="flex justify-end items-end">
        <div className="flex gap-4 mt-5">
          {[...Array(Math.ceil(data.length / itemsPerPage))].map((_, i) => (
            <button
              key={i}
              className={`${
                i + 1 === currentPage
                  ? "buttonGradient"
                  : "bg-[#1A202C] border border-buttonBorder"
              } rounded-xl w-12 h-10 flex justify-center items-center`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

         
            
        </div>
    );
};

export default ExchangesListing;