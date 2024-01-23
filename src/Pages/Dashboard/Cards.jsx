import { Link } from "react-router-dom";
import bitcoinImg from "../../assets/Bitcoin.png";
import bitcoinsvg from "../../assets/Bitcoin.svg"
import ellipse from "../../assets/Ellipse.svg"
import ellipse2 from "../../assets/Ellipse2.svg"
import ellipse3 from "../../assets/Ellipse3.svg"
import ellipse4 from "../../assets/Ellipse4.svg"
import ARCProgress from "./ARC-Progress";

const Cards = () => {
    return (
        <div>
             <div className="grid grid-cols-3 gap-4">
        {/* card section  */}

        <div className=" h-[500px] rounded-lg border border-slate-800 p-4 cardBg">
          {/* card-1  */}
          <div className=" mb-40">
          <div className="flex items-center">
            <div className="w-6 h-6 p-1 rounded-[20px]  bg-gradient-to-r from-[#C9646499] to-[#490FF033]">
              <img className=" w-full" src={bitcoinImg} alt="" />
            </div>
            <div>
              <p className="text-white text-xl">Fear and greed Index</p>
            </div>
          </div>
          <p className=" text-[#718096] text-sm border-b-2 border-borderBottom pb-2 mt-1">
            Multifactorial Crypto Market Sentiment Analysis
          </p>
          </div>
          <div className="flex justify-center items-center">
            <ARCProgress/>
          </div>
        </div>

        <div className=" h-[500px] rounded-lg  border border-slate-800 p-4 cardBg">
          {/* card-2  */}

          <h1 className=" text-white text-xl border-b-2 border-borderBottom pb-2 mt-1">
            Historical values
          </h1>

          <div className="flex justify-between items-center">
            <div className="my-4">
              <p className="text-[#718096] text-[12px]">Now</p>
              <h3 className="text-white font-semibold">Greed</h3>
            </div>
            <div className="rounded-full flex justify-center text-lg  font-semibold text-white  w-8 h-8 bg-[#00A6BF]">
              66
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="my-4">
              <p className="text-[#718096] text-[12px]">Yesterday</p>
              <h3 className="text-white font-semibold">Greed</h3>
            </div>
            <div className="rounded-full flex justify-center text-lg  font-semibold text-white  w-8 h-8 bg-[#B3821F]">
              66
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="my-4">
              <p className="text-[#718096] text-[12px]">Last Week</p>
              <h3 className="text-white font-semibold">Greed</h3>
            </div>
            <div className="rounded-full flex justify-center text-lg  font-semibold text-white  w-8 h-8 bg-[#B3821F]">
              63
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="my-4">
              <p className="text-[#718096] text-[12px]">Last Month</p>
              <h3 className="text-white font-semibold">Greed</h3>
            </div>
            <div className="rounded-full flex justify-center text-lg  font-semibold text-white  w-8 h-8 bg-[#00A6BF]">
                72           
            </div>
          </div>
          
        </div>

        <div className=" h-[500px] rounded-lg border border-slate-800 p-4 cardBg ">
          {/* card-3  */}

          <h1 className=" text-white text-xl border-b-2 border-borderBottom pb-2 mt-1">
          Exchange Listings Feed
          </h1>

          <div className="flex  justify-between items-center border-b-2 border-borderBottom">
            <div className="my-4 flex  justify-center items-center gap-4 ">
              <figure>
                <img src={bitcoinsvg} alt="" />
              </figure>
              <h3 className="text-white text-sm">BlockBank (BBANK) has been  <br />listed on coinEx</h3>
            </div>
            <div className=" flex justify-center text-[#718096]  font-semibold text-[12px]">
              - 2 hours ago
            </div>
          </div>

          <div className="flex  justify-between items-center border-b-2 border-borderBottom">
            <div className="my-4 flex  justify-center items-center gap-4 ">
              <figure className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <img src={ellipse} alt="" />
              </figure>
              <h3 className="text-white text-sm">BlockBank (BBANK) has been  <br />listed on coinEx</h3>
            </div>
            <div className=" flex justify-center text-[#718096]  font-semibold text-[12px]">
              - 2 hours ago
            </div>
          </div>

          <div className="flex  justify-between items-center border-b-2 border-borderBottom">
            <div className="my-4 flex  justify-center items-center gap-4 ">
              <figure className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <img src={ellipse2} alt="" />
              </figure>
              <h3 className="text-white text-sm">BlockBank (BBANK) has been  <br />listed on coinEx</h3>
            </div>
            <div className=" flex justify-center text-[#718096]  font-semibold text-[12px]">
              - 2 hours ago
            </div>
          </div>

          <div className="flex  justify-between items-center border-b-2 border-borderBottom">
            <div className="my-4 flex  justify-center items-center gap-4 ">
              <figure className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <img src={ellipse3} alt="" />
              </figure>
              <h3 className="text-white text-sm">BlockBank (BBANK) has been  <br />listed on coinEx</h3>
            </div>
            <div className=" flex justify-center text-[#718096]  font-semibold text-[12px]">
              - 2 hours ago
            </div>
          </div>

          <div className="flex  justify-between items-center border-b-2 border-borderBottom">
            <div className="my-4 flex  justify-center items-center gap-4 ">
              <figure className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <img src={ellipse4} alt="" />
              </figure>
              <h3 className="text-white text-sm">BlockBank (BBANK) has been  <br />listed on coinEx</h3>
            </div>
            <div className=" flex justify-center text-[#718096]  font-semibold text-[12px]">
              - 2 hours ago
            </div>
          </div>

         <div className="flex justify-center items-center">
         <Link to="/exchanges-listing"> 
         <button className="bg-slate-700 hover:bg-gradient-to-r from-[#3A048054] to-[#4C098E] w-28 border rounded-lg mt-3 border-[#ffffff66] px-5 py-2 mx-auto">
            View All
          </button></Link>
         </div>

          
          
          
        </div>


      </div>
            
        </div>
    );
};

export default Cards;