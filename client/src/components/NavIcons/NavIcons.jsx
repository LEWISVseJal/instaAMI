import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import Logout from "../../img/logout.png";
import { UilSetting } from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/AuthAction";
import { Link } from "react-router-dom";

const NavIcons = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      <UilSetting />
      <img src={Noti} alt="" />
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
      <Link onClick={handleLogout}>
        <img src={Logout} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;