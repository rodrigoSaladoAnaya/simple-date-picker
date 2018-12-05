import {LitElement, html} from '@polymer/lit-element/lit-element.js';

const DateType = {
  fromAttribute: (attr) => attr.sdp_parse(),
  toAttribute:   (prop) => prop
}

class SDPWeeks extends LitElement {
  static get properties() {
    return {
      now: { type: DateType }
    };
  }
  getDayClass(tmp, firstDay) {
    let clz = '';
    if(tmp.getMonth() != firstDay.getMonth()) {
      clz = 'different-month';
    } else if(tmp.sdp_format() == (new Date()).sdp_format()) {
      clz = 'is-today';
    }
    return clz;
  }
  renderDate(weekIndex, dayPos) {
    const firstDay = new Date(this.now.getFullYear(), this.now.getMonth());
    const diff = (weekIndex*7 + dayPos+1) - firstDay.getDay();
    let tmp = new Date(firstDay);
    tmp = new Date(tmp.setDate(diff));
    return html`<sdp-day class="${this.getDayClass(tmp, firstDay)}">${tmp.getDate()}</sdp-day>`;
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
