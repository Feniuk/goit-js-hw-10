import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const id = document.querySelector('#datetime-picker', flatpickr);

id.window.addEventListener('load', function () {
    flatpickr("#myPickerId", {
        enableTime: true, time_24hr: true, defaultDate: new Date(), minuteIncrement: 1, onClose(selectedDates) {
            console.log(selectedDates[0]);
}, });
});
id.flatpickr(selector, options)
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
// {
//     altInput: true,
//     altFormat: "F j, Y",
//     dateFormat: "Y-m-d",
// }