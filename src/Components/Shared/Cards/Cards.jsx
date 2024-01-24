/* eslint-disable react/prop-types */

const Cards = ({ data }) => {
  const { Name, date, description, img, verified, profileImage } = data;
  return (
    <div>
      <div className="flex gap-1 mb-10">
        <div>
          <div className="flex w-full gap-5">
            <figure className="w-9 h-9 lg:w-14 lg:h-14 rounded-full">
              <img className=" rounded-full" src={profileImage} alt="" />
            </figure>
            <div className="flex w-full md:gap-3 gap-1 text-white ">
              <p className="font-bold w-2/3 md:w-42 lg:w-32">{Name || ""}</p>
              <figure className="w-4 h-4 rounded-full">
                <img className="w-full h-full" src={verified} alt="" />
              </figure>
              <p className="text-[#7A8AA3] w-full">{date || ""}</p>
            </div>
          </div>

          <div className="lg:pl-20">
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
