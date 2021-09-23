import { ActionsModalTypes } from "../Actions/ActionsModalTypes";

const initialModaleState = {
	id: 0,
	name: "",
	event: "",
	color: "inherit",
	toggle: "",
	open: false,
};
export const ModalReducer = (state = initialModaleState, action) => {
	switch (action.type) {
		case ActionsModalTypes.Click_MODAL_ACTION:
			return { ...action.payload };
		default:
			return state;
	}
};
