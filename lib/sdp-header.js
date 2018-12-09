import {html} from "../node_modules/@polymer/lit-element/lit-element.js";
import {str_parse, date_short_format, go_back, go_forward} from './sdp-utils.js';

export const backButton = function() {
  return html`
    <svg class="goto-button" viewBox="0 0 48 48" @click=${go_back.bind(this)}>
      <polygon points="15.808,24 26.301,13.507 29.973,17.179 23.161,24 29.977,30.816 26.302,34.492"/>
    </svg>
  `;
}

export const forwardButton = function(onClick) {
  return html`
    <svg class="goto-button" viewBox="0 0 48 48" @click=${go_forward.bind(this)}>
      <polygon points="32.227,24 21.734,13.507 18.062,17.179 24.874,24 18.058,30.816 21.733,34.492"/>
    </svg>
  `;
}

export const shortDateLable = function() {
  const date = str_parse(this.date);
  return html`${date_short_format(date)}`;
}

export const dayLabels = function() {
  return ["D", "L", "M", "M", "J", "V", "S"].map(d => html`
    <span class="day-label">${d}</span>
  `);
}
