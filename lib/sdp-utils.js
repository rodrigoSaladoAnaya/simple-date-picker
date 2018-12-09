import { html } from "../node_modules/@polymer/lit-element/lit-element.js";
export const str_parse = function (str) {
  var p = str.split('-');
  return new Date(p[0], p[1] - 1, p[2]);
};
export const date_short_format = function (date) {
  const m = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  return `${m[date.getMonth()]}, ${date.getFullYear()}`;
};
export const date_format = function (date) {
  const _0s = d => d < 10 ? `0${d}` : d;

  return `${date.getFullYear()}-${_0s(date.getMonth() + 1)}-${_0s(date.getDate())}`;
};
export const go_back = function () {
  this.date = date_goto(this.date, -1);
};
export const go_forward = function () {
  this.date = date_goto(this.date, 1);
};

const date_goto = function (str, i) {
  const date = str_parse(str);
  const next = new Date(date.getFullYear(), date.getMonth() + i);
  return date_format(next);
};