import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
        alt="tinder__logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
