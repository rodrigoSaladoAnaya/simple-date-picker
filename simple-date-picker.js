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
        background-color: var(--sdp-container-background-color, #fff);
        border: 0.05em solid var(--sdp-container-border, #dfdfdf);
      }
      #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      svg {
        width: 2.5em;
        height: 2.5em;
        cursor: pointer;
        margin: 0.5em;
      }
      svg:hover {
        background-color: var(--sdp-goto-background-color, #f6f6f6);
      }
      </style>
      <input typ="text" maxlength="10" placeholder="YYYY-MM-DD"></input>
      <div id="container">
        <div id="header">
          <svg viewBox="0 0 48 48">
            <polygon points="15.808,24 26.301,13.507 29.973,17.179 23.161,24 29.977,30.816 26.302,34.492"/>
          </svg>
          <div>Dic, 2018</div>
          <svg viewBox="0 0 48 48">
            <polygon points="32.227,24 21.734,13.507 18.062,17.179 24.874,24 18.058,30.816 21.733,34.492"/>
          </svg>
        </div>
        <sdp-weeks now="2018-12-04"></sdp-weeks>
      </div>
    `;
  }
}

window.customElements.define('simple-date-picker', SimpleDatePicker);
