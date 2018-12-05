import {LitElement, html} from '@polymer/lit-element/lit-element.js';

class SDPDay extends LitElement {
  render() {
    return html`
    <style>
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.3em;
      height: 1.3em;
      border: 0.05em solid var(--color-day-border, #eaeaea);
      color: var(--color-day, #332800);
      cursor: pointer;
      border-radius: 0.2em;
      margin: 0.2em;
      padding: 0.2em;
    }
    :host(:hover) {
      background-color: var(--color-day-background-hover, #d6eaff);
    }
    </style>
    <slot></slot>
    `;
  }
}
customElements.define('sdp-day', SDPDay);
