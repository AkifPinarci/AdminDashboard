import React from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import { InputBase } from "@mui/material";
import { tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Person } from "@mui/icons-material";
import Profile from "./components/Profile";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleColorMode } from "../../features/color/colorSlice";
const Topbar = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.color.mode);
  const colors = tokens(mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton
          onClick={() => {
            dispatch(toggleColorMode());
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon></DarkModeOutlinedIcon>
          ) : (
            <LightModeOutlinedIcon></LightModeOutlinedIcon>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon></SettingsOutlinedIcon>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Profile />
            </Menu>
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
