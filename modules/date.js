import { DateTime } from "./luxon.min.js";

let Date = () => {
  const get_date = document.querySelector("#date");
  const time = () => {
    const currentDateTime = DateTime.now().toLocaleString(
      DateTime.DATETIME_FULL_WITH_SECONDS
    );
    get_date.innerHTML = currentDateTime;
  };
  setInterval(time, 1000);
};
export { Date };
