import { useEffect, useState } from "react";
import Pagination from "../../Components/Shared/Pagination";

const ExchangesListing = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("exchageListing.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <div className="p-4 contentBG border rounded-xl  text-white  border-slate-800 my-5">
      <h3 className="text-xl font-semibold border-b-2 border-borderBottom pb-2">
        Exchange Listings
      </h3>
      <div>
        {currentData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b-2 border-borderBottom"
          >
            <div className="my-4 flex justify-center items-center gap-4">
              <figure className="w-6 h-6">
                <img className="h-full w-full" src={item.image} alt="" />
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
    </div>
  );
};

export default ExchangesListing;




