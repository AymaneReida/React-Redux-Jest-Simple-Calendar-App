import { createUseStyles } from "react-jss";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const useStyles = createUseStyles({
	App: {
		fontFamily: "sans-serif",
	},
});

export const eventStyles = { width: 730, resize: "none" };

export const boxStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 800,
	height: 500,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const StyledButton = styled(Button)({
	color: "inherit",
	height: 70,
	width: 70,
});
