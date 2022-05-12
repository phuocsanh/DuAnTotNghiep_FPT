import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, Button, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography, useMediaQuery, Radio, RadioGroup, FormLabel, Divider, Switch, styled, MenuItem, Select } from "@mui/material";
// third party
import { Formik } from "formik";
// project imports
import useScriptRef from "../../../hooks/useScriptRef";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import { UpdateUserAction } from "../../../Redux/Action/AuthAction";
// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { EditUserSchema, UserSchema } from "../../../utils/ValidateForm";
const Input = styled("input")({
  display: "none",
});


export default function Info(props) {
  const openEdit = props.openEdit;

  const row = props.row;
  const userId = openEdit ? row[0]._id : null;

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log("data submit", data);

  // const [showAvatar, setShowAvatar] = useState("");
  // const [Avatar, setAvatar] = useState("");
  // const [image, setImage] = useState();
  // const [preview, setPreview] = useState();
  // const fileInputRef = useRef();
  // useEffect(() => {
  //   if (image) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result);
  //     };
  //     reader.readAsDataURL(image);
  //   } else {
  //     setPreview(null);
  //   }
  // }, [image]);

  // const onChangePicture = (e) => {
  //   setAvatar(e.target.files[0]);
  //   setShowAvatar(URL.createObjectURL(e.target.files[0]));
  // };
  const dispatch = useDispatch();
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const customization = useSelector((state) => state.customization);
  const [showAvatar, setShowAvatar] = useState("");
  const [Avatar, setAvatar] = useState("");
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   console.log("file", Avatar);
  // }, [Avatar])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onChangePicture = (e) => {
    setAvatar(e.target.files[0]);
    setShowAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const handleClickShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [checkedIsActive, setCheckedIsActive] = useState(openEdit ? row[0].isActive : true);
  const handleChangeActiveUser = (event) => {
    setCheckedIsActive(event.target.checked);
  };
  const [valueGender, setValueGender] = useState("female");

  const handleChangeGender = (event1) => {
    setValueGender(event1.target.value);
  };
  const [role, setRole] = useState("admin");

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  }
  let userinfo = null;
  const controlForm = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      if (scriptedRef.current) {
        setStatus({ success: true });
        setSubmitting(false);
      }
      if (openEdit) {
        // userinfo = { ...values, gender: valueGender, isActive: checkedIsActive, roles: role };
        // delete userinfo.password;
        // delete userinfo.confirmPassword;
        // console.log(userinfo);
        // console.log("value Email", values.email);

        const userData = new FormData();
        userData.append('email', values.email)
        userData.append('userName', values.userName)
        userData.append('displayName', values.displayName)
        userData.append('phoneNumber', values.phoneNumber)
        userData.append('roles', role)
        userData.append('gender', valueGender)
        userData.append('isActive', checkedIsActive)
        userData.append('avatar', Avatar)
        // userData.append('action', "USER")
        // for (var value of userData.values()) {
        //   console.log(value);
        // }

        dispatch(UpdateUserAction(userId, userData, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmYyMWI4YjgyMDZiZGIxYTQxYTI0ZCIsImlhdCI6MTY0ODc3NDI4NiwiZXhwIjoxNjQ4Nzc3ODg2fQ.uyRpuwe0Z5eVuolLiyRNexyZ5nEs5b11P4xqWw57NzA"))
      } else {
        userinfo = { ...values, gender: valueGender, isActive: checkedIsActive, roles: role };
        delete userinfo.confirmPassword;
        console.log(userinfo);
      }
    } catch (err) {
      console.error(err);
      if (scriptedRef.current) {
        setStatus({ success: false });
        setErrors({ submit: err.message });
        setSubmitting(false);
      }
    }
  };





  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Enter user information</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Email */}
      <Formik
        initialValues={{
          email: openEdit ? row[0].email : "",
          password: "",
          confirmPassword: "",
          displayName: openEdit ? row[0].displayName : "",
          userName: openEdit ? row[0].userName : "",
          phoneNumber: openEdit ? row[0].phoneNumber : "",
        }}
        validationSchema={openEdit ? EditUserSchema : UserSchema}
        onSubmit={controlForm}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            {/* userName and displayName */}
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                {/* User name */}
                <FormControl fullWidth error={Boolean(touched.displayName && errors.displayName)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-password-login"> Full name </InputLabel>
                  <OutlinedInput id="outlined-adornment-password-login" type="text" value={values.displayName} name="displayName" onBlur={handleBlur} onChange={handleChange} inputProps={{}} label="Password" />
                  {touched.displayName && errors.displayName && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.displayName}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={Boolean(touched.userName && errors.userName)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-password-login">User name</InputLabel>
                  <OutlinedInput id="outlined-adornment-password-login" type="text" value={values.userName} name="userName" onBlur={handleBlur} onChange={handleChange} label="Password" inputProps={{}} />
                  {touched.userName && errors.userName && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.userName}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            {openEdit ? (
              <></>
            ) : (
              <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={6}>
                  {/* Password */}
                  <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput, mt: 5 }}>
                    <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>

                    <OutlinedInput
                      id="outlined-adornment-password-login"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" size="large">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      inputProps={{}}
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error id="standard-weight-helper-text-password-login">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* Confirm pass */}
                  <FormControl fullWidth error={Boolean(touched.confirmPassword && errors.confirmPassword)} sx={{ ...theme.typography.customInput, mt: 5 }}>
                    <InputLabel htmlFor="outlined-adornment-password-login">Confirm </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password-login"
                      type={showPasswordConfirm ? "text" : "password"}
                      value={values.confirmPassword}
                      name="confirmPassword"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility" onClick={handleClickShowPasswordConfirm} onMouseDown={handleMouseDownPassword} edge="end" size="large">
                            {showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      inputProps={{}}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <FormHelperText error id="standard-weight-helper-text-password-login">
                        {errors.confirmPassword}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            )}

            {/* Email */}
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput, mt: 5 }}>
              <InputLabel htmlFor="outlined-adornment-email-login">User Email Address </InputLabel>
              <OutlinedInput id="outlined-adornment-email-login" type="email" value={values.email} name="email" onBlur={handleBlur} onChange={handleChange} label="Email Address / Username" inputProps={{}} />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            {/* Phone Number */}
            <FormControl fullWidth error={Boolean(touched.phoneNumber && errors.phoneNumber)} sx={{ ...theme.typography.customInput, mt: 5 }}>
              <InputLabel htmlFor="outlined-adornment-email-login">User Phone Number </InputLabel>
              <OutlinedInput id="outlined-adornment-email-login" type="text" value={values.phoneNumber} name="phoneNumber" onBlur={handleBlur} onChange={handleChange} label="User Phone Number" inputProps={{}} />
              {touched.phoneNumber && errors.phoneNumber && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.phoneNumber}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl sx={{ mt: 5, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={role}
                label="Role"
                onChange={handleChangeRole}
              >
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"user"}>User</MenuItem>
              </Select>
            </FormControl>


            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ mt: 5 }}>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={valueGender} onChange={handleChangeGender}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ mt: 5, ml: 13 }}>
                  <FormLabel id="demo-row-radio-buttons-group-label">Active User</FormLabel>
                  <Switch checked={checkedIsActive} onChange={handleChangeActiveUser} inputProps={{ "aria-label": "controlled" }} />
                </FormControl>
              </Grid>
            </Grid>

            <label htmlFor="icon-button-file">
              <Input id="icon-button-file" type="file" onChange={onChangePicture} />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera size={100} />
              </IconButton>
            </label>

            <div className="text-center">
              <img className="col-md-8" src={showAvatar} />
            </div>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">{openEdit ? "Update" : "Sign Up"}

                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
}

