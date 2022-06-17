import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import DoctorNavbar from "../components/DoctorNavbar/DoctorNavbar";

const PatientDetails = () => {
  const [height, setHeight] = React.useState("155");
  const [weight, setWeight] = React.useState("76");
  const [bmi, setBmi] = React.useState("");
  const [bp, setBp] = React.useState("110/40");
  const [pulse, setPulse] = React.useState("80");
  const [isAilment, setIsAilment] = React.useState({});
  const [isAdmitted, setIsAdmitted] = React.useState({});
  const [clinicalHistory, setClinicalHistory] = React.useState("");
  const [physicalEx, setPhysicalEx] = React.useState("");
  const { id } = useParams();

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleBmiChange = (e) => {
    setBmi(e.target.value);
  };

  const handleBpChange = (e) => {
    setBp(e.target.value);
  };

  const handlePulseChange = (e) => {
    setPulse(e.target.value);
  };

  const handleAilmentChange = (e) => {
    e.persist();
    setIsAilment((isAilment) => ({
      ...isAilment,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdmittedChange = (e) => {
    e.persist();
    setIsAdmitted((isAdmitted) => ({
      ...isAdmitted,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClinicalHistChange = (e) => {
    setClinicalHistory(e.target.value);
  };

  const handlePhysicalExChange = (e) => {
    setPhysicalEx(e.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <DoctorNavbar />
      <Box
        sx={{
          flexGrow: 1,
          // backgroundColor: "#e8eaf6",
          height: "100vh",
          width: "100%",
          pt: 7,
          pb: 0,
        }}
      >
        <Stack
          container="true"
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: "100%",
              overflowY: "auto",
              pt: 2,
              pl: 2,
              pr: 2,
              pb: 2,
              zIndex: 1,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Patient Name
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="standard"
                  disabled
                  value={id}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Entry Date
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="standard"
                  disabled
                  value="10-06-2022"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Height
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="standard"
                  onChange={handleHeightChange}
                  value={height + " cm"}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Weight
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="standard"
                  onChange={handleWeightChange}
                  value={weight + " kg"}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  BMI
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="standard"
                  onChange={handleBmiChange}
                  value={bmi}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  BP
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="standard"
                  onChange={handleBpChange}
                  value={bp + " mm/Hg"}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Pulse Rate
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="standard"
                  onChange={handlePulseChange}
                  value={pulse}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              //spacing={2}
            >
              <Grid
                item
                xs={7}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Is the ailment severely affecting the patient's daily routine?
                </Typography>
              </Grid>
              <Grid
                item
                xs={5}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <FormControl>
                  <RadioGroup
                    row
                    name="ailment"
                    defaultValue="yes"
                    onChange={handleAilmentChange}
                  >
                    <FormControlLabel
                      value="no"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="No"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="yes"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Yes"
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              //spacing={2}
              sx={{ mt: 1 }}
            >
              <Grid
                item
                xs={7}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Is the patient willing to get admitted?
                </Typography>
              </Grid>
              <Grid
                item
                xs={5}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <FormControl>
                  <RadioGroup
                    row
                    name="admitted"
                    defaultValue="yes"
                    onChange={handleAdmittedChange}
                  >
                    <FormControlLabel
                      value="no"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="No"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="yes"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Yes"
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  placeholder="Clinical History"
                  variant="standard"
                  value={clinicalHistory}
                  onChange={handleClinicalHistChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    backgroundColor: "#E5E7E9",
                    padding: "4px 8px",
                    color: "black",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: 1, mb: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  placeholder="Physical Examination"
                  variant="standard"
                  value={physicalEx}
                  onChange={handlePhysicalExChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    backgroundColor: "#E5E7E9",
                    padding: "4px 8px",
                    color: "black",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Doctor
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="standard"
                  disabled
                  value="Dr. James Martin"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Patient History
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  No history found
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default PatientDetails;
