import {html} from "../node_modules/@polymer/lit-element/lit-element.js";

export const weeks = function(dateStr) {
  return [...Array(6).keys()].map(weekIndex => {
      return html`
        <div class="week">
          ${
            [...Array(7).keys()].map(dayPos => {
              return html`<span class="day">${dayPos}</span>`;
            })
          }
        </div>`;
    });
}
