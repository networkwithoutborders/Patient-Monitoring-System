import { Grid, CircularProgress } from "@mui/material";
import React from "react";
import ParamedicHistoryCard from "../components/ParamedicHistoryCard/ParamedicHistoryCard";
import { useSelector, useDispatch } from "react-redux";
import { getPatientHistory } from "../redux/user/user.action";

const ParamedicHistory = () => {
  const access_token = useSelector((state) => state.userReducer.access_token);
  const dispatch = useDispatch();
  const [ParamedicHistDet, setParamedicHistDet] = React.useState([]);

  React.useEffect(() => {
    dispatch(getPatientHistory(access_token))
      .then((response) => setParamedicHistDet(response.payload))
      .catch((error) => console.log("error"));
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ p: 4 }}
      spacing={2}
    >
      {ParamedicHistDet.length === 0 ? (
        <CircularProgress sx={{ mt: 5 }} />
      ) : (
        ParamedicHistDet.map((detail, i) => {
          const date = new Date(detail.visit_time);
          const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          const time = `${date.getHours()}:${String(date.getMinutes()).padStart(
            2,
            "0"
          )} ${monthNames[date.getMonth()]} ${date.getDate()}`;
          // console.log(time);

          return (
            <Grid
              item
              key={i}
              xs={12}
              md={9}
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <ParamedicHistoryCard
                visitTime={time}
                uhid={detail.uid}
                codeColor={detail.severity}
              />
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default ParamedicHistory;
