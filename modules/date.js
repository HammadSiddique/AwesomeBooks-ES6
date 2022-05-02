/* eslint import/prefer-default-export: "off" */
import { DateTime } from './luxon.min.js';

const Date = () => {
  const getDate = document.querySelector('#date');
  const time = () => {
    const currentDateTime = DateTime.now().toLocaleString(
      DateTime.DATETIME_FULL_WITH_SECONDS,
    );
    getDate.innerHTML = currentDateTime;
  };
  setInterval(time, 1000);
};

export { Date };
