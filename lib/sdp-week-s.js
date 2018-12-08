import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import './sdp-week.js';

class SDPWeeks extends LitElement {
  render() {
    return html`
      <sdp-week></sdp-week>
    `;
  }
}
customElements.define('sdp-week-s', SDPWeeks);
