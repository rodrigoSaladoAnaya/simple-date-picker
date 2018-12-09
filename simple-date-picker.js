import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {styles} from './lib/sdp-style.js'
import {backButton, forwardButton, shortDateLable, dayLabels} from './lib/sdp-header.js';
import {weeks} from './lib/sdp-weeks.js';

class SimpleDatePicker extends LitElement {
  constructor() {
    super();
    this._backButton = backButton.bind(this);
    this._shortDateLable = shortDateLable.bind(this);
    this._forwardButton = forwardButton.bind(this);
    this._weeks = weeks.bind(this);
  }
  static get properties() {
    return {
      onUpdateDate: {
        type: Function
      },
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
        ${this._backButton()}
        ${this._shortDateLable()}
        ${this._forwardButton()}
      </div>
      <div class="day-label-s">
        ${dayLabels()}
      </div>
      <div>
        ${this._weeks()}
      </div>
    `;
  }
}
customElements.define('simple-date-picker', SimpleDatePicker);
