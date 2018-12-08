import {LitElement, html} from '@polymer/lit-element/lit-element.js';

class SDPDaysLabels extends LitElement {
  getDaysList() {
    const list = new String().__sdp_days_list();
    return list.map(d => html`<span>${d}</span>`)
  }
  render() {
    return html`
      <style>
      :host {
        display: flex;
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.3em;
        height: 1.3em;
        border: 0.05em solid #fff;
        color: var(--sdp-day-label-color, #332800);
        margin: 0.2em;
        padding: 0.2em;
        user-select: none;
      }
      </style>
      ${this.getDaysList()}
    `;
  }
}
customElements.define('sdp-days-labels', SDPDaysLabels);
