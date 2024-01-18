import loginsvg from '../../assets/Login.svg'
function SignIn() {
  return (
    <div className="flex items-center  h-screen justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="w-[446px]  bg-gray-500 rounded-[20px] z-10 py-20 px-[60px]">

            <div className="flex  flex-col items-center justify-center gap-2">
                <div className="w-[60px] h-[60px]">
                    {/* img */}
                        <img className="w-full h-full rounded-full"  src="https://s3-alpha-sig.figma.com/img/5cbd/f47d/f8528e81c2cae73e0839dd15f7f0a83b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKNNaKOjKx557~cNqgxd6t3gDiB17vclSFwcG1dBWBOH4skrA3a4KzQkjjLzZfajZoJaPnLPhvon5inmRuX4BlPdzwBSMoFpyoxZwb3RQ-D4sNNZOu~buv6LklfGeff2pAX5Y2Z2Z1OoH6tHmmYHcIRBLxDWLY4RWDUNwN3zKA6EFIAgn1VPcmooK4jabFcE-jyjTAxUGJ4IcCGoQ7dk9y4alh~wW1zuej3I8yeWUEvnj8SiETkK5bcC1~P1nHc7tGwZj~M8hRsAj~Z3sIzIE3kxUzFfCdhcZDuZYUQQjeyb1KvlS8ArGKCqD2i7T-sgEVqDvEk2HvzEIDpPErn5dA__" alt="" />

                </div>

                <div>
                    <h3  className="text-[26px] text-white font-bold mb-10">Gold Squad VIP</h3>
                </div>
                <div className="bg-blue-700 w-full rounded-lg py-3 flex items-center justify-center">
                    <button className='text-white text-xl font-semibold flex gap-4 items-center justify-center'>
                        <img src={loginsvg} alt="" />Proceed to Sign In </button>

                </div>
            </div>


             

        
        </div>
    </div>
  )
}
export default SignIn