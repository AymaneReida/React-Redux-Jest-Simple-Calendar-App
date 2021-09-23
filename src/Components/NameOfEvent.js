import React from "react";
import { TextField } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";

export function NameOfEvent({ control, name, errors }) {
	return (
		<Row>
			<Col sm={3}>Name of the Event*</Col>
			<Col sm={9}>
				<Controller
					name="name"
					control={control}
					defaultValue={name}
					rules={{ required: true }}
					render={({ field }) => (
						<TextField
							{...field}
							id="outlined-basic"
							label="Write the name of the event (Required)"
							variant="filled"
							size="small"
							fullWidth
							aria-label="NameOfEvent"
						/>
					)}
				/>
				{errors.name && (
					<span className="fs-6 fw-light text-danger">
						The name of the event is required
					</span>
				)}
			</Col>
		</Row>
	);
}
