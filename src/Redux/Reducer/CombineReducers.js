import { combineReducers } from "redux";
import { EventsReducer } from "./EventsReducer";
import { ModalReducer } from "./ModalReducer";

export const reducers = combineReducers({
	events: EventsReducer,
	modal: ModalReducer,
});
