import React from "react";
import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import { tokens } from "../../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
};
const userSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
});
const ForgetPassword = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/login");
  };
  return (
    <Box>
      <Box>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Forgot Password?
        </Typography>
        <Typography
          variant="h6"
          sx={{ margin: "10px 0", color: colors.primary[300] }}
        >
          Enter your email to reset your password.
        </Typography>
      </Box>
      <Box>
        <Formik
          onSubmit={handleNavigation}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Box>
              <Box display="flex" justifyContent="center" gap="10%" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Submit
                </Button>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default ForgetPassword;
