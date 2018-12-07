import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import './lib/sdp-header.js';
import './lib/sdp-forward-button.js';
import './lib/sdp-back-button.js';
import './lib/sdp-header-label.js';

class SimpleDatePicker extends LitElement {
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
        <sdp-header-label></sdp-header-label>
        <sdp-forward-button></sdp-forward-button>
      </sdp-header>
    `;
  }
}
customElements.define('simple-date-picker', SimpleDatePicker);
