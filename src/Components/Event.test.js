import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Event } from "./Event";
//import { screen } from "@testing-library/dom";

const elementToTest = (
	<Event
		modal={{
			id: 1,
			name: "Test Event Name",
			event: "Test content",
			color: "#FF5252",
			toggle: "update",
			open: true,
		}}
		handleClose={() => null}
		handleEventSubmit={() => null}
		handleRemove={() => null}
	/>
);

test("Test Event Creation Form", function () {
	render(elementToTest);
	expect(elementToTest).not.toBeNull();
});

test("Check Name of Event", function () {
	render(elementToTest);
	const name = document.body.querySelector("[aria-label='NameOfEvent']");
	expect(name.value).toBe("Test Event Name");
});

test("Check Event Content", function () {
	render(elementToTest);
	const content = document.body.querySelector("[aria-label='EventContent']");
	expect(content.value).toBe("Test content");
});

test("Check Color of Event", function () {
	render(elementToTest);
	const color = document.body.querySelector("[aria-label='Color']");
	expect(color.value).toBe("#FF5252");
});

test("Submit on x click", function () {
	const mockSubmit = jest.fn();
	render(
		<Event
			modal={{
				id: 1,
				name: "Test Event Name",
				event: "Test content",
				color: "#FF5252",
				toggle: "update",
				open: true,
			}}
			handleClose={() => null}
			handleEventSubmit={mockSubmit}
			handleRemove={() => null}
		/>
	);
	const submit = document.body.querySelector("[aria-label='Submit']");
	fireEvent.click(submit);
	expect(mockSubmit.mock.calls.length).toBe(1);
});

test("Close on x click", function () {
	const mockClose = jest.fn();
	render(
		<Event
			modal={{
				id: 1,
				name: "Test Event Name",
				event: "Test content",
				color: "#FF5252",
				toggle: "update",
				open: true,
			}}
			handleClose={mockClose}
			handleEventSubmit={() => null}
			handleRemove={() => null}
		/>
	);
	const close = document.body.querySelector("[aria-label='Cancel']");
	fireEvent.click(close);
	expect(mockClose.mock.calls.length).toBe(1);
});

test("Delete on x click", function () {
	const mockDelete = jest.fn();
	render(
		<Event
			modal={{
				id: 1,
				name: "Test Event Name",
				event: "Test content",
				color: "#FF5252",
				toggle: "update",
				open: true,
			}}
			handleClose={() => null}
			handleEventSubmit={() => null}
			handleRemove={mockDelete}
		/>
	);
	const remove = document.body.querySelector("[aria-label='Delete']");
	fireEvent.click(remove);
	expect(mockDelete.mock.calls.length).toBe(1);
});

test("Close on escape key", function () {
	const mockClose = jest.fn();
	render(
		<Event
			modal={{
				id: 1,
				name: "Test Event Name",
				event: "Test content",
				color: "#FF5252",
				toggle: "update",
				open: true,
			}}
			handleClose={mockClose}
			handleEventSubmit={() => null}
			handleRemove={() => null}
		/>
	);
	fireEvent.keyDown(document, { key: "Escape" });
	expect(mockClose.mock.calls.length).toBe(1);
});

/**
 * The last test is just to ensure the proper operation of the escape
 */

test("Does nothing on keydown not being Escape", function () {
	const mockClose = jest.fn();
	render(elementToTest);
	fireEvent.keyDown(document, { key: "Enter" });
	expect(mockClose.mock.calls.length).toBe(0);
});
