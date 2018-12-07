import {LitElement, html} from '@polymer/lit-element/lit-element.js';

class SDPHeader extends LitElement {
  render() {
    return html `
      <style>
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: var(--sdp-header-color, #000);
      }
      </style>
      <slot></slot>
    `;
  }
}
customElements.define('sdp-header', SDPHeader);
