import { ActionsTypes } from "./ActionsTypes";

export const AddEvent = (id, name, event, color) => {
	return {
		type: ActionsTypes.ADD_EVENT_ACTION,
		payload: { id: id, name: name, event: event, color: color },
	};
};

export const UpdateEvent = (id, name, event, color) => {
	return {
		type: ActionsTypes.UPDATE_EVENT_ACTION,
		payload: { id: id, name: name, event: event, color: color },
	};
};

export const RemoveEvent = (id) => {
	return {
		type: ActionsTypes.DELETE_EVENT_ACTION,
		payload: id,
	};
};
