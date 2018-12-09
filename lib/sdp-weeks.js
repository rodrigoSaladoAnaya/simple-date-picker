import {html} from "../node_modules/@polymer/lit-element/lit-element.js";
import {str_parse} from './sdp-utils.js';

export const weeks = function(dateStr) {
  const date = str_parse(dateStr);

  const _1stDay = () => {
    return new Date(date.getFullYear(), date.getMonth());
  };

  const _diffDays = (weekIndex, dayPos) => {
    return weekIndex * 7 + dayPos + 1 - _1stDay().getDay();
  }

  const _getDate = (weekIndex, dayPos) => {
    let current = new Date(_1stDay().setDate(_diffDays(weekIndex, dayPos)));
    return html`<span class="day">${current.getDate()}</span>`;
  }

  return [...Array(6).keys()].map(weekIndex => {
      return html`
        <div class="week">
          ${
            [...Array(7).keys()].map(dayPos => _getDate(weekIndex, dayPos))
          }
        </div>`;
    });
}
