import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "./Form";
import Test from "./Test";

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <Info />;

//     default:
//       throw new Error("Unknown step");
//   }
// }

const theme = createTheme();

export default function Checkout(props) {
  // const [activeStep, setActiveStep] = React.useState(0);
  // console.log(activeStep);

  // const handleNext = () => {
  //   setActiveStep(activeStep);
  // };
  const openEdit = props.openEdit;
  const row = props.row;
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <AppBar position="absolute" color="default" elevation={0}></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" align="center" sx={{ mt: 5, mb: 3 }}>
          User InFo
        </Typography>

        {/* {getStepContent(activeStep)} */}
        <Form openEdit={openEdit} row={row} />
        {/* <Test /> */}
      </Container>
    </ThemeProvider>
  );
}
