import React from "react";
import "./SwipeButtons.css";
import Replay from "@mui/icons-material/Replay";
import Close from "@mui/icons-material/Close";
import StarRate from "@mui/icons-material/StarRate";
import Favorite from "@mui/icons-material/Favorite";
import FlashOn from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
