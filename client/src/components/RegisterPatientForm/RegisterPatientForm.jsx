import React from "react";

import { Box,Typography,FormControl,RadioGroup,Radio,FormControlLabel,FormLabel } from "@mui/material";
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';




const RegisterPatientForm = () => {
	return (
		<Box sx={{ height: "100%",margin:"auto"}}
				display="flex"
 
  flexDirection="column"
	>

		<Box
		display="flex"
  alignItems="flex-start"
  flexDirection="row"
		sx={{mt:20,ml:20,mr:20}}
		>
<Typography variant="h6" sx={{padding:"1rem",mr:10}}>
  Name
</Typography>
			<TextField  label="First name" variant="outlined" sx={{mr: 4}} />
			<TextField  label="Last name" variant="outlined" />

		</Box>

			<Box
		display="flex"
  
  flexDirection="row"
			sx={{mt:5,ml:20,mr:20}}

		>
<Typography variant="h6" sx={{padding:"1rem",mr:10}}>
  Age
</Typography>
			<TextField variant="outlined" sx={{mr: 4}} />
			

		</Box>

			<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
				sx={{ml:5}}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>


		  
					<Typography variant="h6" sx={{padding:"1rem",mr:10}}>
  Blood Group
</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          
         
        >
          <MenuItem value={10}>O+</MenuItem>
          <MenuItem value={20}>O-</MenuItem>
          <MenuItem value={10}>AB+</MenuItem>
          <MenuItem value={20}>AB-</MenuItem>
										<MenuItem value={10}>A+</MenuItem>
          <MenuItem value={20}>A-</MenuItem>
        </Select>
      </FormControl>
   



	<Box
		display="flex"
  
  flexDirection="row"
			sx={{mt:5,ml:20,mr:20}}

		>
<Typography variant="h6" sx={{padding:"1rem",mr:10}}>
  Phone Number
</Typography>
			<TextField variant="outlined" sx={{mr: 4}} />
			

		</Box>
			<Box
		display="flex"
  
  flexDirection="row"
			sx={{mt:5,ml:20,mr:20}}

		>
<Typography variant="h6" sx={{padding:"1rem",mr:10}}>
  Address
</Typography>
			<TextField label="Address line 1" variant="outlined" sx={{mr: 4}} />
			

		</Box>

	
		</Box>
	);
};

export default RegisterPatientForm;
