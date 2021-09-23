import React, { Suspense } from "react";
import { useStyles } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgress } from "@mui/material";

const Calendar = React.lazy(() => import("././Components/Calendar"));

function App({ ...props }) {
	const classes = useStyles();
	const styles = `mt-5 ${classes.App}`;

	return (
		<Container className={styles} fluid>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<div className="mb-5 text-center">
						<Suspense fallback={<CircularProgress />}>
							<h1>Aymane REIDA</h1>
							<h2>Simple Calendar</h2>
							<h3>Click Up</h3>
							<Calendar {...props} />
						</Suspense>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
