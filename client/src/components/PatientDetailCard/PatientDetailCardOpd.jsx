import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Styles from './PatientDetailCardOpd.module.css';
const PatientDetailCard = ({
  orderNo,
  name,
  uhid,
  age,
  sex,
  status,
  doctor,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/doctor/opd/${uhid}`);
  };
  return (
    <Card elevation={4} sx={{ width: '100%', borderRadius: '20px' }}>
      <CardActionArea onClick={handleCardClick}>
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
              className={Styles.fcc}
              // sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   flexDirection: "column",
              // }}
            >
              <Typography variant="body1" gutterBottom sx={{ opacity: '60%' }}>
                Order No
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ opacity: '60%' }}>
                Patient Name
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ opacity: '60%' }}>
                UHID No
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ opacity: '60%' }}>
                Age (Y/M/D)
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ opacity: '60%' }}>
                Sex
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ opacity: '60%' }}>
                Status
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ opacity: '60%' }}>
                Doctor
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              className={Styles.fcc}
              // sx={{
              //   display: 'flex',
              //   justifyContent: 'center',
              //   flexDirection: 'column',
              // }}
            >
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                // sx={{ fontWeight: 'bold' }}
              >
                {orderNo}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                // sx={{ fontWeight: 'bold' }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                // sx={{ fontWeight: 'bold' }}
              >
                {uhid}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                // sx={{ fontWeight: 'bold' }}
              >
                {age}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                // sx={{ fontWeight: 'bold' }}
              >
                {sex}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                // sx={{ fontWeight: 'bold' }}
              >
                {status}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                // sx={{ fontWeight: 'bold' }}
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
