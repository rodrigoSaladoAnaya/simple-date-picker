import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `simple-date-picker`
 * Date picker with LitElement
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SimpleDatePicker extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'simple-date-picker',
      },
    };
  }
}

window.customElements.define('simple-date-picker', SimpleDatePicker);
