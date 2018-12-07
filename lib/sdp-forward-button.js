import {LitElement, html} from '@polymer/lit-element/lit-element.js';

class SDPForwardButton extends LitElement {
  render() {
    return html`
      <style>
      :host {
        display: block;
        width: 2.5em;
        height: 2.5em;
        cursor: pointer;
        margin: 0.5em;
      }
      :host :hover {
        background-color: var(--sdp-goto-background-color, #f6f6f6);
      }
      </style>
      <svg viewBox="0 0 48 48">
        <polygon points="32.227,24 21.734,13.507 18.062,17.179 24.874,24 18.058,30.816 21.733,34.492"/>
      </svg>
    `;
  }
}
customElements.define('sdp-forward-button', SDPForwardButton);
