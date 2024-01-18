

const Card = () => {
    return (
        <div className="cardBg w-2/3 p-5 rounded-xl">
        <div className="flex gap-4 mb-10"> 
            <figure className="w-14 h-14 rounded-full">
                <img src={profileImage} alt="" />
            </figure>
            <div>
                <div className="flex gap-2 text-white items-center ">
                    <p className="font-bold">Airdrop Oasis</p>
                    <figure className="w-4 h-4 rounded-full">
                        <img src={verified} alt="" />
                    </figure>
                    <p className="text-[#7A8AA3]">@AirdropOasis · Nov 28</p>
                </div>
                <p className="text-white text-base mt-4 ">
            Lorem ipsum dolor sit amet consectetur. Magna nisi felis cras eu. Massa massa viverra morbi feugiat tortor bibendum. Bibendum potenti ullamcorper tincidunt at sed lorem enim. Ipsum leo sit rutrum et mauris rhoncus. 

<br />
<br />
<br />

<span className="text-[#2D9CE6]">#textline #textline #textline</span>
            </p>

        <figure className="w-full">
            <img className="w-full" src={postImage} alt="" />
        </figure>
            </div>
            

        </div>

        <div className="flex gap-4 "> 
            <figure className="w-14 h-14 rounded-full">
                <img src={profileImage} alt="" />
            </figure>
            <div>
                <div className="flex gap-2 text-white items-center ">
                    <p className="font-bold">Airdrop Oasis</p>
                    <figure className="w-4 h-4 rounded-full">
                        <img src={verified} alt="" />
                    </figure>
                    <p className="text-[#7A8AA3]">@AirdropOasis · Nov 28</p>
                </div>
                <p className="text-white text-base mt-4 ">
            Lorem ipsum dolor sit amet consectetur. Magna nisi felis cras eu. Massa massa viverra morbi feugiat tortor bibendum. Bibendum potenti ullamcorper tincidunt at sed lorem enim. Ipsum leo sit rutrum et mauris rhoncus. 

<br />
<br />
<br />

<span className="text-[#2D9CE6]">#textline #textline #textline</span>
            </p>

        <figure className="w-full">
            <img className="w-full" src={postImage} alt="" />
        </figure>
            </div>
            

        </div>
        
    </div>
    );
};

export default Card;