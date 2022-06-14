import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const PatientDetailCard = ({
  orderNo,
  name,
  uhid,
  age,
  sex,
  status,
  doctor,
}) => {
  return (
    <Card elevation={4} sx={{ width: "100%", borderRadius: "20px" }}>
      <CardActionArea>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
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
              <Typography variant="body1" gutterBottom>
                Order No
              </Typography>
              <Typography variant="body1" gutterBottom>
                Patient Name
              </Typography>
              <Typography variant="body1" gutterBottom>
                UHID No
              </Typography>
              <Typography variant="body1" gutterBottom>
                Age (Y/M/D)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Sex
              </Typography>
              <Typography variant="body1" gutterBottom>
                Status
              </Typography>
              <Typography variant="body1" gutterBottom>
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
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {orderNo}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {uhid}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {age}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {sex}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {status}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {doctor}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PatientDetailCard;
