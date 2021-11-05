export default function calendar() {
	return new HelloWeek({
		selector: '.hello-week',
		lang: 'pt',
		langFolder: './assets/js/dist/',
		format: 'DD/MM/YYYY',
		weekShort: true,
		monthShort: false,
		multiplePick: false,
		defaultDate: null,
		todayHighlight: true,
		disablePastDays: false,
		disabledDaysOfWeek: null,
		disableDates: null,
		weekStart: 0, //week start on Sunday
		daysHighlight: null,
		daysSelected: null,
		range: false,
		rtl: false,
		locked: false,
		minDate: null,
		maxDate: null,
		nav: ['◀', '▶'],
		onLoad: () => {
			/** callback function */
		},
		onChange: () => {
			/** callback function */
		},
		onSelect: () => {
			/** callback function */
		},
		onClear: () => {
			/** callback function */
		}
	});
}