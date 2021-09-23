import { ActionsModalTypes } from "./ActionsModalTypes";

export const ClickModal = (id, name, event, color, toggle, open) => {
	return {
		type: ActionsModalTypes.Click_MODAL_ACTION,
		payload: {
			id: id,
			name: name,
			event: event,
			color: color,
			toggle: toggle,
			open: open,
		},
	};
};
