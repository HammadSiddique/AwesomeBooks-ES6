import { DateTime } from './luxon.min.js';

function Date() {
    const dt = DateTime.now();
    const dateformat = `${dt.day} - ${dt.month} - ${dt.year} (${dt.zoneName})`;
    document.getElementById('current-date').innerHTML = dateformat;
  }
  
  export { Date };