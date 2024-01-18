/* eslint-disable react/prop-types */

const Cards = ({ data }) => {
  const { Name, date, description, img, verified, profileImage } = data;
  console.log(data);

  return (
    <div>
      <div className="flex gap-4 mb-10">
        <figure className="w-14 h-14">
          <img className="rounded-full" src={profileImage} alt="" />
        </figure>
        <div>
          <div className="flex gap-2 text-white items-center ">
            <p className="font-bold">{Name || ""}</p>
            <figure className="w-4 h-4 rounded-full">
              <img src={verified} alt="" />
            </figure>
            <p className="text-[#7A8AA3]">{date || ""}</p>
          </div>
          <p className="text-white text-base my-4 ">{description}</p>

          <figure className="w-full">
            <img className="w-full" src={img} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Cards;
