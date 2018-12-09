import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";
import './sdp-day.js';

class SDPWeek extends LitElement {
  static get properties() {
    return {
      date: String,
      selected: String,
      weekIndex: Number
    };
  }

  get1stDay() {
    const date = this.date.__sdp_parse();

    return new Date(date.getFullYear(), date.getMonth());
  }

  getDiffDays(dayPos) {
    return this.weekIndex * 7 + dayPos + 1 - this.get1stDay().getDay();
  }

  getClass(current) {
    let clazz = '';

    const date = this.date.__sdp_parse();

    if (this.selected == current.__sdp_format()) {
      clazz = 'is-selected';
    } else if (date.getMonth() != current.getMonth()) {
      clazz = 'different-month';
    }

    return clazz;
  }

  selectDay({
    target
  }) {
    const data = {
      bubbles: true,
      composed: true,
      detail: {
        selected: target.getAttribute('date')
      }
    };
    this.dispatchEvent(new CustomEvent('sdp-select-day', data));
  }

  getDay(dayPos) {
    const diff = this.getDiffDays(dayPos);
    let current = new Date(this.get1stDay().setDate(diff));
    return html`
      <sdp-day
        class=${this.getClass(current)}
        date=${current.__sdp_format()}
        @click=${this.selectDay.bind(this)}>
        ${current.getDate()}
      </sdp-day>
    `;
  }

  getWeek() {
    return [...Array(7).keys()].map(dayPos => this.getDay(dayPos));
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