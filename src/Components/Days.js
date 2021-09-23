import React from "react";
import { StyledButton } from "../styles";

const Day = ({ events, day, handleOpen }) => {
	const findEventColor = (id) => {
		const eventFinded = events.find((event) => event.id === id);
		return eventFinded ? eventFinded.color : "inherit";
	};

	const color = findEventColor(day);

	return (
		<>
			<td>
				<StyledButton
					sx={{ backgroundColor: color }}
					className="rounded-circle"
					onClick={() => handleOpen(day)}
				>
					{day}
				</StyledButton>
			</td>
		</>
	);
};

export function Days({ year, month, events, tableHeader, handleOpen }) {
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const firstDayOfMonth = new Date(year, month, 1).getDay();
	let blanks = [];
	let days = [];
	for (let blank = 0; blank < firstDayOfMonth; blank++) {
		blanks = [...blanks, <td>{""}</td>];
	}
	for (let day = 1; day <= daysInMonth; day++) {
		days = [...days, <Day events={events} day={day} handleOpen={handleOpen} />];
	}
	let totalDays = [...blanks, ...days];
	let number = 0;
	let calendarDays = [];
	while (number < daysInMonth) {
		const values = tableHeader.map(() => {
			++number;
			return totalDays[number - 1];
		});
		calendarDays = [...calendarDays, <tr>{values}</tr>];
	}
	return calendarDays;
}
