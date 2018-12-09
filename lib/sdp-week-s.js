import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import './sdp-week.js';

class SDPWeeks extends LitElement {
  static get properties() {
    return {
      date: String
    };
  }
  getWeeks() {
    return [...Array(6).keys()].map(weekIndex => {
      return html`
        <sdp-week
          date=${this.date}
          weekIndex=${weekIndex}>
      </sdp-week>`;
    })
  }
  render() {
    return html`${this.getWeeks()}`;
  }
}
customElements.define('sdp-week-s', SDPWeeks);
