import { ActionsTypes } from "../Actions/ActionsTypes";

const initialState = [{ id: 0, name: "", event: "", color: "inherit" }];

export const EventsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionsTypes.ADD_EVENT_ACTION:
			return [...state, { ...action.payload }];
		case ActionsTypes.UPDATE_EVENT_ACTION:
			return state.map((event) => {
				if (event.id === action.payload.id) {
					return { ...event, ...action.payload };
				} else {
					return event;
				}
			});
		case ActionsTypes.DELETE_EVENT_ACTION:
			return state.filter((event) => event.id !== action.payload);
		default:
			return state;
	}
};
