/* eslint-disable react/prop-types */

const Cards = ({ data }) => {
  const { Name, date, description, img, verified, profileImage } = data;
  return (
    <div>
      <div className="flex gap-4 mb-10">
        <div>
          <div className="flex gap-5 justify-center items-center">
            <figure className="w-14 h-14 rounded-full">
              <img className=" rounded-full" src={profileImage} alt="" />
            </figure>
            <div className="flex gap-2 text-white items-center ">
              <p className="font-bold ">{Name || ""}</p>
              <figure className="w-4 h-4 rounded-full">
                <img className="w-full " src={verified} alt="" />
              </figure>
              <p className="text-[#7A8AA3]">{date || ""}</p>
            </div>
          </div>

          <div className="md:pl-20">
            <p className="text-white text-base my-4 ">{description}</p>
            <figure className="w-full">
              <img className="w-full" src={img} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
