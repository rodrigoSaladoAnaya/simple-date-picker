import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";
import './sdp-week.js';

class SDPWeeks extends LitElement {
  constructor() {
    super();
    this.addSelectedDayEvent();
  }

  updated() {
    if (this._selected == undefined) {
      this._selected = this.date;
    }
  }

  addSelectedDayEvent() {
    this.addEventListener('sdp-select-day', ({
      detail
    }) => {
      this._selected = detail.selected;
    });
  }

  static get properties() {
    return {
      date: String,
      _selected: String
    };
  }

  getWeeks() {
    return [...Array(6).keys()].map(weekIndex => {
      return html`
        <sdp-week
          date=${this.date}
          selected=${this._selected}
          weekIndex=${weekIndex}>
      </sdp-week>`;
    });
  }

  render() {
    return html`${this.getWeeks()}`;
  }

}

customElements.define('sdp-week-s', SDPWeeks);