Date.prototype.sdp_format = function() {
  const _0s = (d) => d < 10 ?  `0${d}` : d;
  return `${this.getFullYear()}-${_0s(this.getMonth()+1)}-${_0s(this.getDate())}`;
};

String.prototype.sdp_parse = function() {
  var p = this.split('-');
  return new Date(p[0], p[1] - 1, p[2]);
};

String.prototype.sdp_short_format = function() {
  const m = ["Ene","Feb","Mar","Abr","May","Jun",
                "Jul","Ago","Sep","Oct","Nov","Dic"];
  const d = this.sdp_parse();
  return `${m[d.getMonth()]}, ${d.getFullYear()}`;
};
