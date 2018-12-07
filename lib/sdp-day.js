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
        background-color: var(--sdp-day-background-color-hover, #d6eaff);
      }
      :host(.different-month) {
        background-color: var(--sdp-day-different-month-background-color, #eaeaea);
        color: var(--sdp-day-different-month-background-color, #bebebe);
      }
      :host(.different-month:hover) {
        color: var(--sdp-day-different-month-hover-background-color, #332800);
      }
      :host(.is-today) {
        background-color: var(--sdp-day-today-background-color, #3399ff);
        color: var(--sdp-day-today-background-color, #fff);
      }
      :host(.is-selected) {
        background-color: var(--sdp-day-selected-background-color, #ffd700);
        color: var(--sdp-day-selected-background-color, #4c4000);
      }
      </style>
      <slot></slot>
    `;
  }
}
customElements.define('sdp-day', SDPDay);
