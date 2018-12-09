import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {styles} from './lib/sdp-style.js'
import {backButton, forwardButton, headerLabel} from './lib/sdp-header.js';

class SimpleDatePicker extends LitElement {
  static get properties() {
    return {
      date: {
        type: String,
        reflect: true
      }
    };
  }
  render() {
    return html `
      ${styles}
      <div class="header">
        ${backButton}
        ${headerLabel(this.date)}
        ${forwardButton}
      </div>
    `;
  }
}
customElements.define('simple-date-picker', SimpleDatePicker);
