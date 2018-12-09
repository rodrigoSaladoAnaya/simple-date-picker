import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import './sdp-day.js';

class SDPWeek extends LitElement {
  static get properties() {
    return {
      date: String,
      weekIndex: Number
    };
  }
  get1stDay() {
    const date = this.date.__sdp_parse();
    return new Date(date.getFullYear(), date.getMonth());
  }
  getDiffDays(dayPos) {
    return (this.weekIndex*7 + dayPos+1) - this.get1stDay().getDay();
  }
  getDay(dayPos) {
    const diff = this.getDiffDays(dayPos);
    let current = new Date(this.get1stDay().setDate(diff));
    return html`<sdp-day>${current.getDate()}</sdp-day>`;
  }
  getWeek() {
    return [...Array(7).keys()].map(dayPos =>  this.getDay(dayPos));
  }
  render() {
    return html`
      <style>
      :host {
        display: flex;
      }
      </style>
      ${this.getWeek()}
    `;
  }
}
customElements.define('sdp-week', SDPWeek);
