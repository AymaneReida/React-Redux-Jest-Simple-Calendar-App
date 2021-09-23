import React from "react";
import { TextareaAutosize } from "@mui/material";
import { eventStyles } from "../styles";
import { Controller } from "react-hook-form";

export function EventContent({ control, event }) {
	return (
		<Controller
			name="event"
			control={control}
			defaultValue={event}
			render={({ field }) => (
				<TextareaAutosize
					{...field}
					maxRows={7}
					minRows={7}
					aria-label="EventContent"
					placeholder="Write your event"
					style={eventStyles}
				/>
			)}
		/>
	);
}
