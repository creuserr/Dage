var Dage = {
  p: [...document.querySelectorAll("[data-page]")],
  __: window ? (function(){
    document.querySelectorAll("[data-navigate]").forEach(function(el) {
      el.onclick = Dage.navigate;
    });
  })() : 0,
  $: {},
  _() {
    Dage.p = [...document.querySelectorAll("[data-page]")];
    Dage.__ = (window ? (function(){
      document.querySelectorAll("[data-navigate]").forEach(function(el) {
        el.onclick = Dage.navigate;
      });
    })() : 0);
  },
  f1(el) {
    el.removeAttribute("hidden");
  },
  f0(el) {
    el.setAttribute("hidden", "");
  },
  add(el, name) {
    if(name) el.setAttribute("data-page", name);
    this.p.push(el);
  },
  navigate(name) {
    this.p.forEach(function(el) {
      var n = el.getAttribute("data-lage");
      if(n == name) Dage.f1(el);
      else Dage.f0(el);
    });
    if(this.$[name]) this.$[name].call(this);
  },
  setShowHandler(f) {
    this.f1 = f;
  },
  setHideHandler(f) {
    this.f0 = f;
  },
  update() {
    this._();
  },
  on(name, f) {
    this.$[name] = f;
  },
  off(name) {
    this.$[name] = undefined;
  }
}