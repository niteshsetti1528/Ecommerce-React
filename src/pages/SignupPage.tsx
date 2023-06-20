import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Loginpage from "./LoginPage";
import ButtonComponent from "../components/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";
import ToastComponent from "../components/ToastComponent";
import { CircularProgress } from "@mui/material";
import { User } from "../interface/UserInterface";
import { UseAddUser } from "../hooks/useAuth.hook";
import { AppContext } from "../components/AppContext";
import { FaTimes } from "react-icons/fa";

const SignUppage = () => {
  const [state, setState] = useState({
    login: false,
    openToast: false,
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { setOpenState } = useContext(AppContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { mutate, isError, isLoading, error } = UseAddUser();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: User = formData;

    mutate({ ...user, name: user.username });

    console.log(`isError:${isError}`);

    setFormData({
      username: "",
      email: "",
      phone: "",
      password: "",
    });

    updateToastStatus();
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    handleSubmit(event as unknown as FormEvent<HTMLFormElement>);
  };

  const updateLoginStatus = () =>
    setState((prevState) => ({ ...prevState, login: true }));

  const updateToastStatus = () => {
    setState((prevState) => ({
      ...prevState,
      openToast: true,
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

    setOpenState(false);
  };

  return state.login ? (
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
        <div className="flex flex-col px-2 mt-10 mx-6 mb-5 ">
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setOpenState(false)}
          >
            <FaTimes />
          </div>
          <form id="myForm" onSubmit={handleSubmit} className="space-y-6">
            <TextFieldComponent
              inputProps={{
                label: "Enter Username",
                name: "username",
                value: formData.username,
                onChange: handleInputChange,
              }}
            />
            <TextFieldComponent
              inputProps={{
                label: "Enter UserEmail",
                name: "email",
                value: formData.email,
                onChange: handleInputChange,
              }}
            />
            <TextFieldComponent
              inputProps={{
                label: "Enter Mobile Number",
                name: "phone",
                value: formData.phone,
                onChange: handleInputChange,
              }}
            />
            <TextFieldComponent
              inputProps={{
                label: "Enter Password",
                type: "password",
                name: "password",
                value: formData.password,
                onChange: handleInputChange,
              }}
            />

            <p className="text-12  text-GreyColor">
              By continuing, you agree to Flipkart's ,
              <span className="text-blueColor">Terms of Use</span> and{" "}
              <span className="text-blueColor">Privacy Policy</span>.
            </p>
            <div className="mt-5">
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <CircularProgress />
                </div>
              ) : (
                <ButtonComponent
                  buttonProps={{
                    title: "Submit",
                    onClick: () => handleButtonClick,
                  }}
                />
              )}
              <ToastComponent
                toastParams={{
                  open: state.openToast,
                  message: isError ? `${error}` : "User SignUp Successfull",
                  onClose: handleClose,
                  severity: isError ? "error" : "success",
                }}
              />
            </div>
          </form>

          <div className="mt-5">
            <ButtonComponent
              buttonProps={{
                title: "Existing User? Log in",
                backgroundColor: "white",
                textColor: "blueColor",
                onClick: updateLoginStatus,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUppage;
