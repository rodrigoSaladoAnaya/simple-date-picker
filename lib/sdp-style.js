import { html } from "../node_modules/@polymer/lit-element/lit-element.js";
export const styles = html`
  <style>
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 15em;
      padding: 0.6em;
      font-size: var(--sdp-font-size, 1.3em);
      font-family: var(--sdp-font-family);
      background-color: var(--sdp-background-color, #fff);
      border: 0.05em solid var(--sdp-border, #dfdfdf);
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      color: var(--sdp-header-color, #000);
      background-color: var(--sdp-header-background-color, #fff);
    }
    .goto-button {
      display: block;
      width: 2.5em;
      height: 2.5em;
      cursor: pointer;
      margin: 0.5em;
      user-select: none;
    }
    .goto-button:hover {
      background-color: var(--sdp-goto-background-color, #f6f6f6);
    }
    .day-label-s {
      display: flex;
    }
    .day-label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.3em;
      height: 1.3em;
      border: 0.05em solid #fff;
      color: var(--sdp-day-label-color, #332800);
      margin: 0.2em;
      padding: 0.2em;
      user-select: none;
    }
    .week {
      display: flex;
    }
    .day {
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
    .day:hover {
      background-color: var(--sdp-day-hover-background-color, #ffd700);
      color: var(--sdp-day-color, #332800);
    }
    .different-month {
      background-color: var(--sdp-day-diff-background-color, #eaeaea);
      color: var(--sdp-day-diff-background-color, #bebebe);
    }
    .is-selected {
      background-color: var(--sdp-day-selected-background-color, #349ced);
      color: var(--sdp-day-selected-color, #fff);
      font-weight: bold;
    }
  </style>
`;