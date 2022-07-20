import { Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DoctorNavbar from "../components/DoctorNavbar/DoctorNavbar";
import { getAge } from "../components/HelperFunction/calculateAge";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ReportIcon from "@mui/icons-material/Report";
import DetailsIcon from "@mui/icons-material/Details";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import HistoryIcon from "@mui/icons-material/History";
import CollectionsIcon from "@mui/icons-material/Collections";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import MedicationIcon from "@mui/icons-material/Medication";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PatientDetailCard from "../components/PatientDetailCard/PatientDetailCard";

const patientDetails = [
  {
    name: "Vitals Record",
    icon: <ThermostatIcon sx={{ color: "#3F51B5" }} />,
    link: "vitals",
  },
  {
    name: "Test Reports",
    icon: <ReportIcon sx={{ color: "#3F51B5" }} />,
    link: "test-report",
  },
  {
    name: "Patient Details",
    icon: <DetailsIcon sx={{ color: "#3F51B5" }} />,
    link: "detais",
  },
  {
    name: "Symptoms",
    icon: <CoronavirusIcon sx={{ color: "#3F51B5" }} />,
    link: "symptoms",
  },
  {
    name: "Medical History",
    icon: <HistoryIcon sx={{ color: "#3F51B5" }} />,
    link: "medical-history",
  },
  {
    name: "Patient Gallery",
    icon: <CollectionsIcon sx={{ color: "#3F51B5" }} />,
    link: "gallery",
  },
  {
    name: "To-Do",
    icon: <NoteAltIcon sx={{ color: "#3F51B5" }} />,
    link: "to-do",
  },
  {
    name: "Prescription",
    icon: <MedicationIcon sx={{ color: "#3F51B5" }} />,
    link: "prescription",
  },
  {
    name: "Consultants",
    icon: <PsychologyIcon sx={{ color: "#3F51B5" }} />,
    link: "consultants",
  },
];

const PatientDetails = () => {
  let year = new Date("10-09-2001").getYear();
  let month = new Date("10-09-2001").getMonth();
  let day = new Date("10-09-2001").getDate();
  let ageString = getAge(year, month, day);
  let age = ageString.split();
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
                  value="Rishabh Randhawa"
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
                  Age
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
                  value={age[0]}
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
                  UHID
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
                  value="dcc333"
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
              justifyContent="flex-start"
              alignItems="flex-start"
              //sx={{ p: 4 }}
              //spacing={2}
            >
              {patientDetails.map((details, i) => {
                return (
                  <Grid
                    item
                    key={i}
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",

                      width: "100%",
                    }}
                  >
                    <PatientDetailCard
                      name={details.name}
                      icon={details.icon}
                      link={details.link}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default PatientDetails;
