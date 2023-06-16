import TextField from "@mui/material/TextField";
import { useState } from "react";
import Loginpage from "./LoginPage";

const SignUppage = () => {
  const [login, setLogin] = useState(false);
  return login ? (
    <Loginpage />
  ) : (
    <div>
      <div className="flex">
        <div className="bg-blueColor flex flex-col py-11 px-7  space-y-48 ">
          <div className="space-y-3">
            <div className="text-28 text-white font-bold">
              Looks like you're new here!
            </div>
            <div className="text-lightWhiteColor text-18 w-48">
              Sign up with your mobile number to get started
            </div>
          </div>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt="images"
          />
        </div>
        <div className="flex flex-col px-2 mt-16 mx-6 mb-5 ">
          <div className="space-y-4">
            <TextField
              id="standard-basic"
              label="Enter Username"
              variant="standard"
              className="w-full"
              inputProps={{ color: "grey" }}
            />
            <TextField
              id="standard-basic"
              label="Enter Mobile Number"
              variant="standard"
              className="w-full"
              inputProps={{ color: "grey" }}
            />
            <TextField
              id="standard-basic"
              label="Enter Password"
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
                Submit
              </button>
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={() => setLogin(true)}
              className="bg-white w-full h-48 text-blueColor shadow-sm shadow-white font-bold"
            >
              Existing User? Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUppage;
