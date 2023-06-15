import TextField from "@mui/material/TextField";

const Loginpage = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-blueColor flex flex-col py-11 px-7  space-y-48 ">
          <div className="space-y-3">
            <div className="text-28 text-white font-bold">Login</div>
            <div className="text-lightWhiteColor text-18 w-48">
              Get access to your Orders, Wishlist and Recommendations
            </div>
          </div>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt="images"
          />
        </div>
        <div className="flex flex-col px-2 mt-16 mx-6 mb-5 ">
          <div>
            <TextField
              id="standard-basic"
              label="Enter Email / Mobile Number"
              variant="standard"
              className="w-full"
              inputProps={{ color: "grey" }}
            />

            <p className="text-12 mt-10  text-GreyColor">
              By continuing, you agree to Flipkart's ,
              <span className="text-blueColor">Terms of Use</span> and{" "}
              <span className="text-blueColor">Privacy Policy</span>.
            </p>
            <div className="mt-5">
              <button className="bg-orangeColor w-full h-48 text-white font-bold">
                Request OTP
              </button>
            </div>
          </div>
          <div className="flex mt-auto mb-5 justify-center text-blueColor">
            New to Flipkart? Create an account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
