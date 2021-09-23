import React from "react";
import { Button } from "@mui/material";
import { Row, Col } from "react-bootstrap";

export function Buttons({ handleRemove, id, toggle, handleClose }) {
	return (
		<Row className="mt-2">
			<Col>
				<Row className="justify-content-md-end">
					<Col>
						<Button
							variant="contained"
							onClick={() => handleRemove(id)}
							color="error"
							disabled={toggle === "add"}
							aria-label="Delete"
						>
							Delete
						</Button>
					</Col>
					<Col md="auto">
						<Button
							variant="contained"
							onClick={handleClose}
							aria-label="Cancel"
						>
							Cancel
						</Button>
					</Col>
					<Col md="auto">
						<Button variant="contained" type="submit" aria-label="Submit">
							Save
						</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
