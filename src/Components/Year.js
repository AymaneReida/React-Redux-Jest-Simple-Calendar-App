const JanuaryMonthWhereTheFirstDaySunday = (month) => {
	let year = new Date().getFullYear();
	while (true) {
		if (
			new Date(year, month, 1).getDay() === 0 &&
			new Date(year, month + 1, 0).getDay() === 2
		) {
			break;
		} else {
			++year;
		}
	}
	return year;
};

export const Year = (month) => JanuaryMonthWhereTheFirstDaySunday(month);
