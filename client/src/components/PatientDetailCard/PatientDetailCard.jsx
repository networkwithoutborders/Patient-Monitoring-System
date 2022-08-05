import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import Styles from './PatientDetailCard.module.css';
const PatientDetailCard = ({ name, icon, link }) => {
  const navigate = useNavigate();

  return (
    <Card
      elevation={5}
      sx={{ width: '100%', borderRadius: '10px', marginTop: '15px' }}
    >
      <CardActionArea
        onClick={() => navigate(`/doctor/patient-details/${link}`)}
      >
        <CardContent sx={{ display: 'flex', padding: '4px 4px' }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid
              item
              xs={3}
              md={3}
              className={Styles.grid1}
              // sx={{
              //   display: "flex",
              //   justifyContent: "flex-start",
              //   alignItems: "center",
              //   flexDirection: "column",
              // }}
            >
              <IconButton color="inherit">{icon}</IconButton>
            </Grid>
            <Grid
              item
              xs={7}
              md={3}
              className={Styles.grid2}
              // sx={{
              //   display: 'flex',
              //   justifyContent: 'flex-start',
              //   flexDirection: 'column',
              // }}
            >
              <Typography
                variant="body1"
                //gutterBottom
                //sx={{ fontWeight: "bold" }}
              >
                {name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              md={3}
              className={Styles.grid3}
              // sx={{
              //   display: 'flex',
              //   justifyContent: 'flex-end',
              //   flexDirection: 'column',
              // }}
            >
              <IconButton color="inherit">
                <KeyboardArrowRightIcon sx={{ opacity: '60%' }} />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PatientDetailCard;
