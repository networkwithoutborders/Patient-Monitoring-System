import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import Styles from './ParamedicHistoryCard.module.css';

const ParamedicHistoryCard = ({ visitTime, uhid, codeColor }) => {
  return (
    <Card elevation={4} sx={{ width: '100%' }}>
      <CardActionArea>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid
              item
              xs={4}
              md={3}
              className={Styles.fcc}
              // sx={{
              // 	display: "flex",
              // 	justifyContent: "center",
              // 	flexDirection: "column",
              // }}
            >
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                //sx={{ fontWeight: 'bold' }}
              >
                Visit Time
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={Styles.bold}
                // sx={{ fontWeight: 'bold' }}
              >
                UHID
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              md={3}
              className={Styles.fcc}
              //   sx={{
              //     display: 'flex',
              //     justifyContent: 'center',
              //     flexDirection: 'column',
              //   }}
            >
              <Typography variant="body1" gutterBottom>
                {visitTime}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {uhid}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              md={3}
              className={Styles.fc}
              //   sx={{
              //     display: 'flex',
              //     justifyContent: 'center',
              //   }}
            >
              <Paper
                elevation={2}
                className={Styles.paper}
                sx={{
                  //   height: '40px',
                  //   width: '40px',
                  backgroundColor: codeColor,
                  // borderRadius: '5px',
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ParamedicHistoryCard;
