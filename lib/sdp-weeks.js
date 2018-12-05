import {LitElement, html} from '@polymer/lit-element/lit-element.js';

const DateType = {
  fromAttribute: (attr) => attr.sdp_parse(),
  toAttribute:   (prop) => { console.log("DateType toAttribute"); return prop; }
}

class SDPWeeks extends LitElement {
  static get properties() {
    return {
      now: {type: DateType}
    };
  }
  renderDate(weekIndex, dayPos) {
    const firstDay = new Date(this.now.getFullYear(), this.now.getMonth());
    const diff = (weekIndex*7 + dayPos+1) - firstDay.getDay();
    const tmp = new Date(firstDay.setDate(diff));
    return html`<sdp-day>${tmp.getDate()}</sdp-day>`;
  }
  render() {
    return html`
    <style>
    .week {
      display: flex;
    }
    </style>
    ${[...Array(6).keys()].map(weekIndex => {
      return html`
        <div class="week">
          ${[...Array(7).keys()].map(this.renderDate.bind(this, weekIndex))}
        </div>
      `;
    })}
    `;
  }
}
customElements.define('sdp-weeks', SDPWeeks);
