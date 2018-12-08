import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import './sdp-day.js';

class SDPWeek extends LitElement {
  render() {
    return html`
      <style>
      :host {
        display: flex;
      }
      </style>
      <sdp-day>1</sdp-day>
      <sdp-day>1</sdp-day>
      <sdp-day>1</sdp-day>
      <sdp-day>1</sdp-day>
      <sdp-day>1</sdp-day>
      <sdp-day>1</sdp-day>
      <sdp-day>1</sdp-day>
    `;
  }
}
customElements.define('sdp-week', SDPWeek);
