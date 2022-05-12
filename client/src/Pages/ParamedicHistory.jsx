import { Grid } from "@mui/material";
import React from "react";
import ParamedicHistoryCard from "../components/ParamedicHistoryCard/ParamedicHistoryCard";

const ParamedicHistDet = [
  {
    visitTime: "12:30:57 A.M",
    uhid: "213453",
    codeColor: "#ED2939",
  },
  {
    visitTime: "12:00:30 A.M",
    uhid: "213413",
    codeColor: "#FFDA03",
  },
  {
    visitTime: "11:30:57 P.M",
    uhid: "213213",
    codeColor: "#30B21A",
  },
  {
    visitTime: "12:30:57 P.M",
    uhid: "213453",
    codeColor: "#FFDA03",
  },
  {
    visitTime: "01:30:34 A.M",
    uhid: "213413",
    codeColor: "#ED2939",
  },
  {
    visitTime: "12:35:51 A.M",
    uhid: "213453",
    codeColor: "#ED2939",
  },
];

const ParamedicHistory = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ p: 4 }}
      spacing={2}
    >
      {ParamedicHistDet.map((detail, i) => {
        return (
          <Grid
            key={i}
            item
            xs={12}
            md={9}
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            <ParamedicHistoryCard
              visitTime={detail.visitTime}
              uhid={detail.uhid}
              codeColor={detail.codeColor}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ParamedicHistory;
