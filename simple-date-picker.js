import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import './lib/sdp-config.js';
import './lib/sdp-header.js';
import './lib/sdp-forward-button.js';
import './lib/sdp-back-button.js';
import './lib/sdp-header-label.js';
import './lib/sdp-days-labels.js';

class SimpleDatePicker extends LitElement {
  constructor() {
    super();
    this.date = new Date().__sdp_format();
  }
  static get properties() {
    return {
      date: String
    };
  }
  render() {
    return html `
      <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15em;
        font-size: var(--sdp-font-size, 1.3em);
        font-family: var(--sdp-font-family);
        background-color: var(--sdp-background-color, #fff);
        border: 0.05em solid var(--sdp-border, #dfdfdf);
      }
      </style>
      <sdp-header>
        <sdp-back-button></sdp-back-button>
        <sdp-header-label date="${this.date}"></sdp-header-label>
        <sdp-forward-button></sdp-forward-button>
      </sdp-header>
      <sdp-days-labels></sdp-days-labels>
    `;
  }
}
customElements.define('simple-date-picker', SimpleDatePicker);
