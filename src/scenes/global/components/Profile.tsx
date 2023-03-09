import React from "react";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import { tokens } from "../../../theme";
const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      width="200px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box>
        <Box className="flex-center">
          <img
            style={{ borderRadius: "50px" }}
            alt="profile-user"
            width="75px"
            height="75px"
            src={require("../../../assets/1632511631550.jfif")}
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h5"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
            Mehmet A. Pinarci
          </Typography>
          <Typography variant="h6" color={colors.greenAccent[500]}>
            JR. Admin
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ width: "100%" }} />
      <MenuItem
        onClick={() => {
          console.log("Profile");
        }}
      >
        <Typography>Notes</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          console.log("Profile");
        }}
      >
        <Typography>Tasks</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          console.log("Profile");
        }}
      >
        <Typography>Settings</Typography>
      </MenuItem>
      <MenuItem
        sx={{}}
        onClick={() => {
          console.log("Profile");
        }}
      >
        <Typography>Sign Out</Typography>
      </MenuItem>
    </Box>
  );
};

export default Profile;
