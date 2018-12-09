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
        border: 0.05em solid var(--sdp-day-border, #eaeaea);
        color: var(--sdp-day-color, #332800);
        background-color: var(--sdp-day-background-color, #fff);
        cursor: pointer;
        border-radius: 0.2em;
        margin: 0.2em;
        padding: 0.2em;
        user-select: none;
      }
      :host(:hover) {
        background-color: var(--sdp-day-hover-background-color, #ffd700);
      }
      :host(.different-month) {
        background-color: var(--sdp-day-diff-background-color, #eaeaea);
        color: var(--sdp-day-diff-background-color, #bebebe);
      }
      :host(.different-month:hover) {
        background-color: var(--sdp-day-hover-background-color, #ffd700);
        color: var(--sdp-day-color, #332800);
      }
      :host(.is-selected) {
        background-color: var(--sdp-day-selected-background-color, #349ced);
        color: var(--sdp-day-selected-color, #fff);
        font-weight: bold;
      }
      </style>
      <slot></slot>
    `;
  }
}
customElements.define('sdp-day', SDPDay);
