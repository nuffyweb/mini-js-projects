const date = document.querySelector('.date');
 date.addEventListener('blur', getDayWeek);

function getDayWeek() {
	const day = document.querySelector('.day span');
const	dayWeak = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const arr = date.value.split('.').reverse().join(',');
	const correctDate = new Date(arr);
	const correctDay = correctDate.getDay();
	day.innerHTML = dayWeak[correctDay];
}