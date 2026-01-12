import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Poster submission form - January 15, 2026",
    description:
    (
      <>
        Contributed posters are welcome, use the{" "}
        <a href="https://forms.gle/uD3a9h3PVXUrXu5K8">form here</a> to submit your poster.
      </>
    ), 
  },
  {
    label: "Registration form - January 15, 2026",
    description:
    (
      <>
        Registration for the meeting is free but mandatory, please use the
        {" "}<a href="https://forms.gle/aRprw93BCwPHHYJj8">form</a> to register.
      </>
    ),
  },
  {
    label: "Done!",
    description: `Thanks for participating.`,
  },
];

export default function RegistrationSection() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <div className="registration-section">
      <h2>Registration form</h2>

      <Box className="registration-stepper">
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel optional={index === steps.length - 1 ? <Typography variant="caption">Last step</Typography> : null}>
                {step.label}
              </StepLabel>

              <StepContent>
                <Typography>
                  {step.description}
                </Typography>
                <Box className="step-buttons">
                  <Button className="continue" onClick={handleNext}>
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>

                  <Button className={`back ${index === 0 ? "disabled" : ""}`} onClick={handleBack} disabled={index === 0}>
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} className="registration-reset">
            <Typography>All steps completed — you’re finished!</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
