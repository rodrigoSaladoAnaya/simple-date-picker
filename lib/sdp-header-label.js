import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";

class SDPHeaderLabel extends LitElement {
  static get properties() {
    return {
      date: String
    };
  }

  render() {
    return html`
      ${this.date.__sdp_short_format()}
    `;
  }

}

customElements.define('sdp-header-label', SDPHeaderLabel);