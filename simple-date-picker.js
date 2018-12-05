import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import './lib/sdp-day.js';
/**
 * `simple-date-picker`
 * Date picker with LitElement
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * blue: #3FA6FD
 */
class SimpleDatePicker extends LitElement {
  render() {
    return html`
      <style>
      :host {
        display: block;
        width: 15em;
      }
      :host > * {
        box-sizing: border-box;
      }
      input {
        width: 100%;
      }
      #container {
        width: 100%;
        border: 1px solid #bebebe;
      }
      </style>
      <input typ="text" maxlength="8"></input>
      <div id="container">
        <sdp-day>1</sdp-day>
      </div>
    `;
  }
}

window.customElements.define('simple-date-picker', SimpleDatePicker);
