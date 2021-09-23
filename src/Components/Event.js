import React, { useEffect, useCallback } from "react";
import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { boxStyle } from "../styles";
import { useForm } from "react-hook-form";
import { Radios } from "./Radios";
import { NameOfEvent } from "./NameOfEvent";
import { EventContent } from "./EventContent";
import { Buttons } from "./Buttons";

export function Event({ modal, handleClose, handleEventSubmit, handleRemove }) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		handleEventSubmit(
			modal.id,
			data.name,
			data.event,
			data.color,
			modal.toggle
		);
		handleClose();
	};

	const handleKeyDown = useCallback(
		function (e) {
			if (e.key === "Escape") {
				handleClose();
			}
		},
		[handleClose]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return function () {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={modal.open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={modal.open}>
					<Box sx={boxStyle}>
						<Row>
							<Col>
								<form onSubmit={handleSubmit(onSubmit)}>
									<Typography
										id="transition-modal-title"
										variant="h6"
										component="h2"
									>
										{modal.toggle === "add"
											? "Add an event"
											: "Update your event"}
									</Typography>
									<Typography id="transition-modal-description" sx={{ mt: 2 }}>
										<NameOfEvent
											control={control}
											name={modal.name}
											errors={errors}
										/>
									</Typography>
									<Typography id="transition-modal-description" sx={{ mt: 2 }}>
										<Radios control={control} defaultColor={modal.color} />
										<EventContent control={control} event={modal.event} />
									</Typography>
									<Buttons
										handleRemove={handleRemove}
										id={modal.id}
										toggle={modal.toggle}
										handleClose={handleClose}
									/>
								</form>
							</Col>
						</Row>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
