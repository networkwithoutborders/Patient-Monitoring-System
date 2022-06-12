import React from "react";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Autocomplete, Button, Grid, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DeptOptions = ["A", "B", "C", "D"];
const DrOptions = ["A", "B", "C", "D"];

const DoctorOPDConsult = () => {
  const [fromDate, setFromDate] = React.useState(Date);
  const [toDate, setToDate] = React.useState(Date);

  const handleFromDateChange = (newValue) => {
    setFromDate(newValue);
  };

  const handleToDateChange = (newValue) => {
    setToDate(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar position="fixed" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <IconButton>
            <HomeIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ ml: 3 }}>
            Dr. James Martin
          </Typography>
        </Toolbar>
      </MuiAppBar>
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
                <TextField variant="outlined" label="UHID" />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField variant="outlined" label="IP No." />
              </Grid>
              <Grid item xs={12} md={12}>
                <Autocomplete
                  multiple
                  options={DeptOptions}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Department" />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Autocomplete
                  multiple
                  options={DrOptions}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
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
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default DoctorOPDConsult;
