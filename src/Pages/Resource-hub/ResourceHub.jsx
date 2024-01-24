import searchIcon from "../../assets/search-normal.svg";
import gridIcon from "../../assets/Icon (9).svg";
import listIcon from "../../assets/Vector.svg";
import Modal from "../../Components/Shared/Modals/Modal";
import ListView from "../../Components/View/ListView";
import { viewdata } from "../../../data";
import GridView from "../../Components/View/GridView";
import importIcon from "../../assets/importIcon.svg";
import { useState } from "react";

const ResourceHub = () => {
  const [modal, setModal] = useState(false);
  const [viewType, setViewType] = useState("list");
  const [importFile, setImportFile] = useState(false);
  return (
    <div className="p-4">
      {importFile ? (
        <div className="my-5 lg:h-52 py-12 flex justify-center border items-center text-white border-slate-800  rounded-lg">
          <div className="border border-dashed border-[#490FF0] w-3/4 xl:w-1/2 flex flex-col lg:flex-row gap-5 justify-between rounded-xl p-6 items-center">
            <figure>
              <img src={importIcon} alt="" />
            </figure>
            <div>
              <p>Select a file or drag and drop here</p>
              <p className="text-[#7A8AA3] text-[12px]">
                JPG, PNG, PDF or Video File.
              </p>
            </div>
            <label
              htmlFor="file-input"
              className="bg-[#490FF0] px-6 py-2 rounded-lg text-lg cursor-pointer"
            >
              Import File
            </label>
            <input className="hidden" id="file-input" type="file" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="relative my-5  xl:h-14 flex flex-col gap-6 xl:flex-row justify-between px-2 py-3 items-center  text-white border border-slate-800  rounded-lg">
        <div>
          <h3 className="text-lg font-bold">Resources Hub </h3>
        </div>

        <div className="flex flex-wrap relative  xl:justify-center xl:items-center   xl:gap-6">
          <div className="flex   lg:flex-row gap-5 justify-between"></div>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-wrap gap-4">
              <div className="relative order-1 w-[200px] lg:w-fit ">
                <input
                  placeholder="Search"
                  className="border pl-10 w-full  text-xl  py-2 rounded-xl border-borderBottom bg-primaryBg text-white "
                  type="text"
                />
                <img
                  className="absolute top-4  left-3"
                  src={searchIcon}
                  alt=""
                />
              </div>
              <div className="order-4 md:order-2 w-28 md:w-fit">
                <p
                  onClick={() => setImportFile(!importFile)}
                  className="cursor-pointer border px-3 xl:text-xl w-full text-sm  py-2 rounded-xl border-borderBottom bg-primaryBg text-white"
                >
                  Add New File
                </p>
              </div>
              <div className="order-5 md:order-3 w-36 xl:w-fit">
                <p
                  onClick={() => setModal(true)}
                  className="cursor-pointer border px-3 text-sm w-full xl:text-xl  py-2 rounded-xl border-borderBottom bg-primaryBg text-white "
                >
                  Create New Folder
                </p>
              </div>
              <div
                onClick={() => setViewType("list")}
                className={`${
                  viewType == "list" ? "bg-[#490FF0]" : "bg-primaryBg"
                }  cursor-pointer border px-3 h-10 py-3 rounded-xl border-borderBottom order-2 text-white md:order-4`}
              >
                <img className="h-full" src={listIcon} alt="" />
              </div>
              <div
                onClick={() => setViewType("grid")}
                className={`${
                  viewType == "grid" ? "bg-[#490FF0]" : "bg-primaryBg"
                } cursor-pointer border px-3 h-10 py-3 rounded-xl border-borderBottom  text-white order-3 md:order-5`}
              >
                <img className="h-full" src={gridIcon} alt="" />
              </div>
            </div>
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
              <button className="text-white bg-[#490FF0] px-6 py-2 rounded-lg border border-borderBottom">
                Create New File
              </button>
              <button
                className="text-white  px-6 py-2 rounded-lg border border-red-600"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <div className="my-5 cardBg rounded-xl px-5">
        {viewType == "list" ? (
          <ListView data={viewdata} />
        ) : (
          <GridView data={viewdata} />
        )}
      </div>
    </div>
  );
};

export default ResourceHub;

// useEffect(() => {
//   // Close the dropdown when the user clicks outside of it
//   function handleClickOutside(event) {
//     if (importRef.current && !importRef.current.contains(event.target)) {
//         setImportFile(false);
//         // setClicked(false);
//     }
// }
// // Add event listener when the dropdown is open
// if (importFile) {
//     document.addEventListener('mousedown', handleClickOutside);

// } else {
//     // Remove the event listener when the dropdown is closed
//     document.removeEventListener('mousedown', handleClickOutside);
// }
// return () => {
//     document.removeEventListener('mousedown', handleClickOutside);
// };

// }, [importFile]);
