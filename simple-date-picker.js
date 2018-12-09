import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {styles} from './lib/sdp-style.js'
import {backButton, forwardButton, shortDateLable, dayLabels} from './lib/sdp-header.js';
import {weeks} from './lib/sdp-weeks.js';
import {go_back, go_forward} from './lib/sdp-utils.js';

class SimpleDatePicker extends LitElement {
  static get properties() {
    return {
      date: {
        type: String,
        reflect: true
      },
      _selected: String
    };
  }
  updated() {
    if(this._selected === undefined) {
      this._selected = this.date;
    }
  }
  render() {
    return html `
      ${styles}
      <div class="header">
        ${backButton(go_back.bind(this))}
        ${shortDateLable.bind(this)()}
        ${forwardButton(go_forward.bind(this))}
      </div>
      <div class="day-label-s">
        ${dayLabels()}
      </div>
      <div>
        ${weeks.bind(this)()}
      </div>
    `;
  }
}
customElements.define('simple-date-picker', SimpleDatePicker);
