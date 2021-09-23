import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Year } from "./Components/Year";
import { Months } from "./Components/Months";
import { Months31 } from "./Components/Months31";

/**
 * This component is a reusable calendar with any year and month.
 * You can add an event to your calendar by clicking on a day of it.
 * You can close your form either by clicking the cancel button or the escape key on your keyboard.
 * The year used in this example comes from the <Year(<Month31>)> function,
 * to display the month of January with the first day being Sunday.
 * You must be careful if you want to use this last feature,
 * you must enter the same month in the argument of the <Year(<Month31>)>
 * function as in the (props) "month" and must have 31 days.
 */

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App year={Year(Months31.January)} month={Months.January} />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
