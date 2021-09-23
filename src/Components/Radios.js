import React from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { Controller } from "react-hook-form";
import { RadioGroup, FormLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { colors } from "./Colors";

export function Radios({ control, defaultColor }) {
	const radios = colors.map((color, index) => {
		return (
			<FormControlLabel
				key={index}
				value={color.code}
				control={<Radio />}
				label={color.name.charAt(0).toUpperCase() + color.name.slice(1)}
			/>
		);
	});
	return (
		<Controller
			name="color"
			control={control}
			defaultValue={defaultColor}
			render={({ field }) => (
				<FormControl component="fieldset">
					<FormLabel component="legend">Color</FormLabel>
					<RadioGroup row {...field} aria-label="Color">
						{radios}
					</RadioGroup>
				</FormControl>
			)}
		/>
	);
}
