import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import './lib/sdp-day.js';
import './lib/sdp-weeks.js';

Date.prototype.sdp_format = function() {
  const _0s = (d) => d < 10 ?  `0${d}` : d;
  return `${this.getFullYear()}-${_0s(this.getMonth()+1)}-${_0s(this.getDate())}`;
};

String.prototype.sdp_parse = function() {
  var p = this.split('-');
  return new Date(p[0], p[1] - 1, p[2]);
};

class SimpleDatePicker extends LitElement {
  render() {
    return html`
      <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15em;
      }
      :host > * {
        box-sizing: border-box;
      }
      #container {
        margin-top: 0.6em;
        background-color: var(--sdp-container-background-color, #fbfbfb);
      }
      </style>
      <input typ="text" maxlength="10" placeholder="YYYY-MM-DD"></input>
      <div id="container">
        <sdp-weeks now="2018-12-04"></sdp-weeks>
      </div>
    `;
  }
}

window.customElements.define('simple-date-picker', SimpleDatePicker);
