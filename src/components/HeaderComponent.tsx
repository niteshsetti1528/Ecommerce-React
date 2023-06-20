import SearchComponent from "./SearchComponent";
import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginProvider";
import { Badge, BadgeProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppState } from "../redux/cartReducer";
import { AppContext } from "./AppContext";

const HeaderComponent: React.FC<{
  onClick: () => void;
  onSignout: () => void;
}> = ({ onClick, onSignout }) => {
  const { user, isLogged } = useContext(LoginContext);

  const navigate = useNavigate();
  const cartCount = useSelector((state: AppState) => state.cart);

  const handleClick = () => {
    navigate("/cart");
  };

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="fixed top-0 h-14  w-full bg-blue-600 flex items-center space-x-5">
      <div className="logo ml-52 ">
        <div className=" text-white font-OpenSans text-2xl">FlipKart</div>
        <div className=" text-white text-sm">Explore Plus</div>
      </div>
      <SearchComponent />

      <div className="flex justify-between text-white space-x-11 font-semibold">
        <button
          type="button"
          onClick={isLogged ? onSignout : onClick}
          className="px-4"
        >
          {isLogged ? "Signout" : "Login"}
        </button>
        <div onClick={handleClick} className="hover:cursor-pointer">
          <StyledBadge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </div>
        <div className="tracking-wide	">
          {isLogged && `Welcome ${user.username}`}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
