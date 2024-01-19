 const Pagination = ({ currentPage, totalPages, onPageChange }) => {
       return (
         <div className="flex justify-end items-end">
           <div className="flex gap-4 mt-5">
             {[...Array(totalPages)].map((_, i) => (
               <button
                 key={i}
                 className={`${
                   i + 1 === currentPage
                     ? "buttonGradient"
                     : "bg-[#1A202C] border border-buttonBorder"
                 } rounded-xl w-12 h-10 flex justify-center items-center`}
                 onClick={() => onPageChange(i + 1)}
               >
                 {i + 1}
               </button>
             ))}
           </div>
        </div>
       );
     };
    
     export default Pagination;