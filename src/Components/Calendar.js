import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "@mui/material";
import { CardContent, Typography } from "@mui/material";
import {
	AddEvent,
	UpdateEvent,
	RemoveEvent,
} from "../Redux/Actions/ActionsEvents";
import { ClickModal } from "../Redux/Actions/ActionsModalEvents";
import { Days } from "./Days";
import { Event } from "./Event";
import { Months } from "./Months";

const Calendar = ({ ...props }) => {
	const events = useSelector((state) => state.events);
	const modal = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	const ModalContext = React.createContext(modal);

	const handleEventSubmit = (id, name, event, color, toggle) => {
		toggle === "add"
			? dispatch(AddEvent(id, name, event, color))
			: dispatch(UpdateEvent(id, name, event, color));
	};

	const findEvent = (id) => {
		const eventFinded = events.find((event) => event.id === id);
		return eventFinded
			? { ...eventFinded, toggle: "update" }
			: { id: id, name: "", event: "", color: "inherit", toggle: "add" };
	};

	const handleOpen = (id) => {
		const findModalEvent = findEvent(id);
		dispatch(
			ClickModal(
				findModalEvent.id,
				findModalEvent.name,
				findModalEvent.event,
				findModalEvent.color,
				findModalEvent.toggle,
				true
			)
		);
	};
	const handleClose = () =>
		dispatch(ClickModal(0, "", "", "inherit", "", false));

	const handleRemove = (id) => {
		dispatch(RemoveEvent(id));
		handleClose();
	};

	const tableHeader = ["S", "M", "T", "W", "T", "F", "S"];
	const calendarHeader = tableHeader.map((header, index) => {
		return (
			<td style={{ padding: 30 }} key={index}>
				{header}
			</td>
		);
	});

	return (
		<Card className="border-0" variant="outlined">
			<CardContent>
				<Typography>
					<h3 className="mb-4 ms-4 text-start">
						{Object.keys(Months)[props.month]}
					</h3>
					<table>
						<thead>
							<tr>{calendarHeader}</tr>
						</thead>
						<tbody>
							<Days
								year={props.year}
								month={props.month}
								events={events}
								tableHeader={tableHeader}
								handleOpen={handleOpen}
							/>
						</tbody>
					</table>
					<ModalContext.Provider value={modal}>
						<Event
							modal={modal}
							handleClose={handleClose}
							handleEventSubmit={handleEventSubmit}
							handleRemove={handleRemove}
						/>
					</ModalContext.Provider>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Calendar;
