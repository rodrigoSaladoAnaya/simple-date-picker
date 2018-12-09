import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";

class SDPBackButton extends LitElement {
  goto() {
    const data = {
      bubbles: true,
      composed: true,
      detail: {
        next: -1
      }
    };
    this.dispatchEvent(new CustomEvent('sdp-goto', data));
  }

  render() {
    return html`
      <style>
      :host {
        display: block;
        width: 2.5em;
        height: 2.5em;
        cursor: pointer;
        margin: 0.5em;
        user-select: none;
      }
      :host :hover {
        background-color: var(--sdp-goto-background-color, #f6f6f6);
      }
      </style>
      <svg viewBox="0 0 48 48" @click=${this.goto}>
        <polygon points="15.808,24 26.301,13.507 29.973,17.179 23.161,24 29.977,30.816 26.302,34.492"/>
      </svg>
    `;
  }

}

customElements.define('sdp-back-button', SDPBackButton);