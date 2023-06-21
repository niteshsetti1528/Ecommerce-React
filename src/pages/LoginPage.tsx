import { ChangeEvent, FormEvent, useContext, useState } from "react";
import SignUppage from "./SignupPage";
import TextFieldComponent from "../components/TextFieldComponent";
import ButtonComponent from "../components/ButtonComponent";
import { AppContext } from "../components/AppContext";
import { FaTimes } from "react-icons/fa";
import { UseGetUser, UserLogin } from "../hooks/useAuth.hook";
import { User } from "../interface/UserInterface";
import ToastComponent from "../components/ToastComponent";
import { LoginContext } from "../components/LoginProvider";
import { AxiosHeaders, AxiosResponse } from "axios";

const Loginpage = () => {
  const [state, setState] = useState({
    signUp: false,
    openToast: false,
    toastError: false,
  });

  const { setOpenState } = useContext(AppContext);
  const { setLoginState } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLoginInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const updateSignStatus = () =>
    setState((prevState) => ({ ...prevState, signUp: true }));

  const { mutate } = UserLogin();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: User = formData;

    try {
      mutate(user, {
        onSuccess: (responseData) => {
          // Access the user data from responseData
          const userData = responseData as AxiosResponse;

          // Do something with the user data
          const data = userData.data as User;
          const users: boolean =
            user.username === formData.username &&
            user.password === formData.password;
          if (users) {
            localStorage.setItem(
              "userDetails",
              JSON.stringify({ ...data, isLogged: true })
            );
            updateToastStatus(false);
            setLoginState(true, { ...data, isLogged: true });
          } else {
            updateToastStatus(true);
          }
        },
      });
    } catch (error) {
      console.log(error, "from catch");
    }
  };

  const updateToastStatus = (error: boolean) => {
    setState((prevState) => ({
      ...prevState,
      openToast: true,
      toastError: error,
    }));
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setState((prevState) => ({
      ...prevState,
      openToast: false,
    }));
    if (!state.toastError) {
      setOpenState(false);
    }
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    handleSubmit(event as unknown as FormEvent<HTMLFormElement>);
  };

  return state.signUp ? (
    <SignUppage />
  ) : (
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

        <div className="flex flex-col px-2 mt-5 mx-6 mb-5  ">
          <div className="space-y-4">
            <div
              className="flex justify-end cursor-pointer"
              onClick={() => setOpenState(false)}
            >
              <FaTimes />
            </div>
            <form id="myForm" onSubmit={handleSubmit} className="space-y-6">
              <TextFieldComponent
                inputProps={{
                  label: "Enter Name",
                  name: "username",
                  value: formData.username,
                  onChange: handleLoginInputChange,
                }}
              />
              <TextFieldComponent
                inputProps={{
                  label: "Enter Password",
                  type: "password",
                  name: "password",
                  value: formData.password,
                  onChange: handleLoginInputChange,
                }}
              />
              <ToastComponent
                toastParams={{
                  open: state.openToast,
                  message: state.toastError
                    ? "Invalid Credintials"
                    : "User Login Successfull",
                  onClose: handleClose,
                  severity: state.toastError ? "error" : "success",
                }}
              />

              <p className="text-12 mt-10  text-GreyColor">
                By continuing, you agree to Flipkart's ,
                <span className="text-blueColor">Terms of Use</span> and{" "}
                <span className="text-blueColor">Privacy Policy</span>.
              </p>
              <div className="mt-5">
                <ButtonComponent
                  buttonProps={{
                    title: "Login",
                    onClick: () => handleButtonClick,
                  }}
                />
              </div>
            </form>
          </div>

          <div
            className="flex mt-auto mb-5 justify-center text-blueColor hover:cursor-pointer"
            onClick={updateSignStatus}
          >
            New to Flipkart? Create an account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
