import searchIcon from "../../assets/search-normal.svg";
import gridIcon from "../../assets/Icon (9).svg";
import listIcon from "../../assets/Vector.svg";
import { useState } from "react";
import Modal from "../../Components/Shared/Modals/Modal";
import ListView from "../../Components/View/ListView";
import { viewdata } from "../../../data";
import GridView from "../../Components/View/GridView";


const ResourceHub = () => {
  const [modal, setModal] = useState(false);
  const [viewType,setViewType] =useState("list")
  console.log(viewType);

  return (
    <div>
      <div className="relative my-5 h-14 flex justify-between px-2 items-center  text-white border border-slate-800  rounded-lg">
        <div >
          <h3 className="text-lg font-bold">Resources Hub </h3>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="relative">
            <input
              placeholder="Search"
              className="border pl-10  text-xl  py-2 rounded-xl border-borderBottom bg-primaryBg text-white "
              type="text"
            />
            <img className="absolute top-4  left-3" src={searchIcon} alt="" />
          </div>
          <div>
            <p
              className="cursor-pointer border px-3 text-xl  py-2 rounded-xl border-borderBottom bg-primaryBg text-white "
            >
              Add New File
            </p>
          </div>
          <div>
            <p 
            onClick={() => setModal(true)} className="cursor-pointer border px-3 text-xl  py-2 rounded-xl border-borderBottom bg-primaryBg text-white ">
              Create New Folder
            </p>
          </div>
          <div onClick={() => setViewType("list")} className={`${viewType == "list" ? "bg-[#490FF0]" : "bg-primaryBg"} cursor-pointer border px-3 h-10 py-3 rounded-xl border-borderBottom  text-white`}>
            <img className="h-full" src={listIcon} alt="" />
          </div>
          <div onClick={() => setViewType("grid")} className={`${viewType == "grid" ? "bg-[#490FF0]" : "bg-primaryBg"} cursor-pointer border px-3 h-10 py-3 rounded-xl border-borderBottom  text-white`}>
            <img className="h-full" src={gridIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-5  mx-auto my-auto ">
        <Modal modal={modal} close={setModal}>
         <div className="border flex justify-center items-center flex-col p-5 rounded-lg bg-[#1E2033]"> 
         <input
              placeholder="Enter Folder Name"
              className="border pl-10  text-xl  py-2 rounded-xl border-borderBottom bg-primaryBg text-white "
              type="text"
            />
          <div className="mt-8 flex gap-5 p-5 justify-between items-centers text-white ">
            <button className="text-white bg-[#490FF0] px-6 py-2 rounded-lg border border-borderBottom">Create New File</button>
            <button className="text-white  px-6 py-2 rounded-lg border border-red-600" onClick={() => setModal(false)}>Cancel</button>

          </div>
         </div>
        </Modal>
      </div>
     
     <div className="my-5 cardBg rounded-xl px-5">
     {
        viewType == "list" ?  
        <ListView  data={viewdata}/>
      :
      <GridView  data={viewdata}/>
      }

     </div>
    </div>
  );
};

export default ResourceHub;
