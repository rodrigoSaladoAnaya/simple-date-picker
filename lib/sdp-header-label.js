import {LitElement, html} from '@polymer/lit-element/lit-element.js';

class SDPHeaderLabel extends LitElement {
  render() {
    return html`
      MES, AÑO
    `;
  }
}
customElements.define('sdp-header-label', SDPHeaderLabel);
