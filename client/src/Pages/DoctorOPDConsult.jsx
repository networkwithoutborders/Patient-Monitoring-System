import React from "react";

import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { Autocomplete, Button, Grid, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import PatientDetailCard from "../components/PatientDetailCard/PatientDetailCard";
import { getAge } from "../components/HelperFunction/calculateAge";
import DoctorNavbar from "../components/DoctorNavbar/DoctorNavbar";

const DeptOptions = ["A", "B", "C", "D"];
const DrOptions = ["A", "B", "C", "D"];

const patientDetails = [
  {
    name: "ABC",
    uhid: "2231233",
    birthDate: new Date("2001-10-09"),
    sex: "Male",
    status: "Yet to Consult",
    doctor: "Dr. James Martin",
  },
  {
    name: "ABD",
    uhid: "2231234",
    birthDate: new Date("2000-12-30"),
    sex: "Male",
    status: "Yet to Consult",
    doctor: "Dr. James Martin",
  },
];

const DoctorOPDConsult = () => {
  const [fromDate, setFromDate] = React.useState(new Date());
  const [toDate, setToDate] = React.useState(new Date());
  const [uhid, setUhid] = React.useState("");
  const [ipNo, setIpNo] = React.useState("");
  const [dept, setDept] = React.useState(null);
  const [doctor, setDoctor] = React.useState(null);
  const [isDetailClicked, setIsDetailClicked] = React.useState(false);
  const [isDetailFound, setIsDetailFound] = React.useState(false);

  const handleFromDateChange = (newValue) => {
    setFromDate(newValue);
  };

  const handleToDateChange = (newValue) => {
    setToDate(newValue);
  };

  const handleUhidChange = (e) => {
    setUhid(e.target.value);
  };

  const handleIpChange = (e) => {
    setIpNo(e.target.value);
  };

  //const handleDeptChange = (newValue) => {
  //  setDept(newValue);
  // };

  //   const handleDrChange = (newValue) => {
  //  setDoctor(newValue);
  //};

  const handleDetailsClick = () => {
    setIsDetailClicked(!isDetailClicked);
  };

  const handleClearClick = () => {
    setFromDate(null);
    setToDate(null);
    setUhid("");
    setIpNo("");
    // setDept(null);
    //setDoctor(null);
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
              //width: "100%",
              overflowY: "auto",
              pt: 2,
              pl: 2,
              pr: 2,
              pb: 2,

              zIndex: 1,
            }}
          >
            <Typography variant="h6" sx={{ pb: 2 }}>
              OPD Consultation Entry
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              sx={{ pt: 0 }}
            >
              <Grid item xs={6} md={6}>
                {" "}
                <DatePicker
                  label="From"
                  value={fromDate}
                  onChange={handleFromDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                {" "}
                <DatePicker
                  label="To"
                  value={toDate}
                  minDate={fromDate}
                  onChange={handleToDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>

              <Grid item xs={6} md={6}>
                <TextField
                  variant="outlined"
                  label="UHID"
                  value={uhid}
                  onChange={handleUhidChange}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  variant="outlined"
                  label="IP No."
                  value={ipNo}
                  onChange={handleIpChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Autocomplete
                  options={DeptOptions}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  // onChange={handleDeptChange}
                  //value={dept}
                  renderInput={(params) => (
                    <TextField {...params} label="Department" />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Autocomplete
                  options={DrOptions}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  // value={doctor}
                  // onChange={handleDrChange}
                  renderInput={(params) => (
                    <TextField {...params} label="Doctor" />
                  )}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ pt: 2 }}
            >
              <Grid item xs={5} md={6}>
                <Button
                  variant="contained"
                  onClick={handleDetailsClick}
                  sx={{
                    width: "100%",
                    backgroundColor: "#3F51B5",
                    color: "#fff",
                  }}
                >
                  Get Details
                </Button>
              </Grid>
              <Grid item xs={5} md={6}>
                <Button
                  variant="contained"
                  onClick={handleClearClick}
                  sx={{
                    width: "100%",
                    backgroundColor: "#3F51B5",
                    color: "#fff",
                  }}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
            {isDetailClicked && (
              <>
                <Divider sx={{ pt: 2, borderColor: "black", opacity: "50%" }} />
                <Typography variant="body1" sx={{ pt: 1 }}>
                  Patient Details
                </Typography>

                {isDetailFound ? (
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ pt: 2 }}
                  >
                    <Grid item xs={12} md={6}>
                      <Typography variant="h5" sx={{ pt: 4 }}>
                        No Patient Records found.
                      </Typography>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ pt: 2 }}
                  >
                    {patientDetails.map((details, i) => {
                      let dobYear = details.birthDate.getYear();
                      let dobMonth = details.birthDate.getMonth();
                      let dobDate = details.birthDate.getDate();
                      let ageString = getAge(dobYear, dobMonth, dobDate);

                      return (
                        <Grid
                          item
                          key={i}
                          xs={12}
                          md={6}
                          sx={{
                            display: "flex",
                            justifyContent: "center",

                            width: "100%",
                          }}
                        >
                          <PatientDetailCard
                            orderNo={i + 1}
                            name={details.name}
                            age={ageString}
                            uhid={details.uhid}
                            sex={details.sex}
                            status={details.status}
                            doctor={details.doctor}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default DoctorOPDConsult;
