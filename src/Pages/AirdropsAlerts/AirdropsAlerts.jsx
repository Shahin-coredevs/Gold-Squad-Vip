import { useEffect, useState } from "react";
import Cards from "../../Components/Shared/Cards/Cards";


const AirdropsAlerts = () => {
   
    const [data,setData] = useState([])

    useEffect(()=>{
     fetch('airdropsAlerts.json')
     .then(res=>res.json())
     .then(data=>setData(data))
    },[])

    return (
       <div className="p-4">
         <div className="cardBg lg:w-2/3 p-5 rounded-xl">
      
      {
        data.map(data=><Cards  key={data?.id} data={data}/>)
      }
    </div>
       </div>
        
    );
};

export default AirdropsAlerts;