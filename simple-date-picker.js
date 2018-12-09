import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {styles} from './lib/sdp-style.js'
import {backButton, forwardButton, shortDateLable} from './lib/sdp-header.js';
import {go_back, go_forward} from './lib/sdp-utils.js';

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
        ${backButton(go_back.bind(this))}
        ${shortDateLable(this.date)}
        ${forwardButton(go_forward.bind(this))}
      </div>
    `;
  }
}
customElements.define('simple-date-picker', SimpleDatePicker);
