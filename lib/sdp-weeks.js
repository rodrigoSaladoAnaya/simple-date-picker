import {html} from "../node_modules/@polymer/lit-element/lit-element.js";
import {str_parse, date_format} from './sdp-utils.js';

export const weeks = function() {
  const date = str_parse(this.date);

  const updateDate = (current) => {
    this._selected = date_format(current);
  }

  const _1stDay = () => {
    return new Date(date.getFullYear(), date.getMonth());
  };

  const _diffDays = (weekIndex, dayPos) => {
    return weekIndex * 7 + dayPos + 1 - _1stDay().getDay();
  }

  const _class = (current) => {
    let clazz = '';
    if (this._selected == date_format(current)) {
      clazz = 'is-selected';
    } else if (date.getMonth() !== current.getMonth()) {
      clazz = 'different-month';
    }
    return clazz;
  }

  const _getDate = (weekIndex, dayPos) => {
    let current = new Date(_1stDay().setDate(_diffDays(weekIndex, dayPos)));
    return html`
      <span class="day ${_class(current)}" @click=${() => updateDate(current)}>
        ${current.getDate()}
      </span>
    `;
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
