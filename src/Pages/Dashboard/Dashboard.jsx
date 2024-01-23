import Cards from "./Cards";


const Dashboard = () => {
  return (
    <div className=" ">
      {/* header section  */}

      <div className="my-5 h-52 py-12 pl-6 text-white border border-slate-800  rounded-lg">
        <h3 className="font-semibold">Welcome Back,</h3>
        <h1 className="text-[32px] font-bold mb-2">John Smith</h1>
        <p>VIP Mepmber</p>
      </div>

     <Cards/>

     <div className="flex my-5 gap-5 w-full ">
     <div className="flex-1  rounded-lg  border border-slate-800 p-4 cardBg text-white">
   
           <h3 className="text-xl mb-2 font-medium border-b-2 border-borderBottom pb-2">Announcements</h3>
           <div>

            <p className="text-[#7A8AA3] my-2">Nov 22, 2023</p>
            <p className="text-sm">Vestibulum sed neque consectetur viverra semper felis molestie tincidunt. Vestibulum sed neque  consecteturviverra 
           <br />  semper felis molestie tincidunt.</p>
           </div>

     </div>

     <div className="w-[620px] border border-slate-800 p-4 rounded-lg cardBg text-white flex justify-center items-end">
     <p className="text-xl font-bold text-white">More Coming Soon</p>
     </div>
    
     </div>


    </div>
  );
};

export default Dashboard;
