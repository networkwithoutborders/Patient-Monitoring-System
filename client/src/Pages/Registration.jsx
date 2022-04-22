import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { Grid } from "@mui/material";

import Header from "../components/Header/Header";
import RegisterPatient from "../components/RegisterPatient/RegisterPatient";
import RegisterPatientForm from "../components/RegisterPatientForm/RegisterPatientForm";

import { registerNewPatient } from "../redux/registerPatient/registerPatient.action";

const validationSchema = yup.object({
	firstName: yup
		.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
});

const Registration = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [patientDetails, setPatientDetails] = React.useState({
		firstName: "",
		lastName: "",
		age: "",
		gender: "male",
		bloodGroup: "",
		phoneNumber: "",
		address: "",
		city: "",
		district: "",
	});
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = (details) => {
		// e.preventDefault();
		// console.log("submitting", details);
		// setLoading(true);
		dispatch(registerNewPatient(details))
			.then((response) => {
				// console.log(response);
				setLoading(false);
				navigate(`/patient/${response.payload._id}`);
			})
			.catch((error) => {
				console.log("error");
				setLoading(false);
			});
	};

	const formik = useFormik({
		initialValues: patientDetails,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			// console.log(values);
			setLoading(true);
			// setPatientDetails((prevValue) => {
			// 	return { ...prevValue, firstName: values.firstName };
			// })

			handleSubmit({ ...patientDetails, firstName: values.firstName });
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="stretch"
				sx={{ height: "100vh", width: "100%", overflow: "auto" }}
			>
				<Grid
					item
					xs={12}
					sx={{
						position: "absolute",
						left: 0,
						top: 0,
						right: 0,
						zIndex: 1,
					}}
				>
					<Header title="Register Patient" />
				</Grid>
				<Grid item xs={12} sx={{ mt: 5, zIndex: 0 }}>
					<RegisterPatientForm
						patientDetails={patientDetails}
						setPatientDetails={setPatientDetails}
						formik={formik}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{ position: "absolute", left: 0, bottom: 0, right: 0 }}
				>
					<RegisterPatient
						patientDetails={patientDetails}
						setPatientDetails={setPatientDetails}
						formik={formik}
						loading={loading}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default Registration;
