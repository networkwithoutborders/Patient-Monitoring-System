import {
	Card,
	CardActionArea,
	CardContent,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import React from "react";

const ParamedicHistoryCard = ({ visitTime, uhid, codeColor }) => {
	return (
		<Card elevation={4} sx={{ width: "100%" }}>
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
								Visit Time
							</Typography>
							<Typography
								variant="body1"
								gutterBottom
								sx={{ fontWeight: "bold" }}
							>
								UHID
							</Typography>
						</Grid>
						<Grid
							item
							xs={4}
							md={3}
							sx={{
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
							}}
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
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Paper
								elevation={2}
								sx={{
									height: "40px",
									width: "40px",
									backgroundColor: codeColor,
									borderRadius: "5px",
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
