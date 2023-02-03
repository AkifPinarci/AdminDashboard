import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { HeaderProps } from "../types/HeaderComponentTypes";
const Header = ({ title, subtitle, sx = {} }: HeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px" sx={sx}>
      <Typography
        variant="h2"
        color={colors.grey[200]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
