(function () {
  var LANG_KEY = "mb_lang", CART_KEY = "mb_cart";
  var lang = localStorage.getItem(LANG_KEY) || "de";

  function money(n) {
    return lang === "de"
      ? n.toFixed(2).replace(".", ",") + " \u20ac"
      : "\u20ac" + n.toFixed(2);
  }
  function txt(o, key) { return lang === "de" ? o[key + "e"] || o.de : o[key + "n"] || o.en; }
  function name(o) { return lang === "de" ? o.de : o.en; }
  function desc(o) { return lang === "de" ? o.dde : o.den; }
  function L(de, en) { return lang === "de" ? de : en; }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll(".i18n").forEach(function (el) {
      el.innerHTML = el.getAttribute("data-" + lang);
    });
    var t = document.getElementById("lang-toggle");
    if (t) {
      t.children[0].classList.toggle("on", lang === "de");
      t.children[1].classList.toggle("on", lang === "en");
    }
    render();
  }

  // ---- cart ----
  function cart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (e) { return {}; } }
  function save(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); paintCount(); renderCart(); }
  function add(id) { var c = cart(); c[id] = (c[id] || 0) + 1; save(c); }
  function sub(id) { var c = cart(); if (!c[id]) return; c[id]--; if (c[id] <= 0) delete c[id]; save(c); }
  function findItem(id) {
    for (var i = 0; i < MENU.length; i++)
      for (var j = 0; j < MENU[i].items.length; j++)
        if (MENU[i].items[j].id === id) return MENU[i].items[j];
    return null;
  }
  function paintCount() {
    var n = 0, c = cart();
    for (var k in c) n += c[k];
    var el = document.getElementById("cart-count");
    if (el) el.textContent = n;
  }

  function itemCard(it) {
    var price = it.tbc ? '<span class="tbc-price">' + L("Preis folgt", "price to follow") + "</span>" : money(it.p);
    var btn = it.tbc ? "" : '<button class="add-btn" data-add="' + it.id + '">+</button>';
    return '<article class="item">' +
      '<div class="item-top"><h3>' + name(it) + (it.tag ? ' <span class="rank">' + it.tag + "</span>" : "") + "</h3>" +
      '<span class="price">' + price + "</span></div>" +
      (desc(it) ? "<p>" + desc(it) + "</p>" : "") + btn + "</article>";
  }

  function render() {
    // full menu
    var root = document.getElementById("menu-root");
    if (root) {
      root.innerHTML = MENU.map(function (cat) {
        return '<div class="menu-cat"><div class="section-head"><h2>' + name(cat) + "</h2></div>" +
          (desc(cat) ? '<p class="cat-desc">' + desc(cat) + "</p>" : "") +
          '<div class="items">' + cat.items.map(itemCard).join("") + "</div></div>";
      }).join("");
    }
    // featured cards
    var feat = document.getElementById("featured");
    if (feat) {
      var imgs = { monster: "https://snayana-hub.github.io/burger-preview/burger-hero.jpg", "big-bacon": "https://snayana-hub.github.io/burger-preview/big-bacon.jpg", meister: "https://snayana-hub.github.io/burger-preview/meister.jpg" };
      feat.innerHTML = FEATURED.map(function (id) {
        var it = findItem(id);
        return '<article class="card"><div class="card-img"><img src="' + (imgs[id] || "burger-hero.jpg") + '" alt=""></div>' +
          "<h3>" + name(it) + "</h3><p>" + desc(it) + "</p>" +
          '<div class="card-foot"><span class="price">' + money(it.p) + "</span>" +
          '<button class="add-btn" data-add="' + it.id + '">' + L("Hinzuf\u00fcgen", "Add") + "</button></div></article>";
      }).join("");
    }
    renderCart();
    paintCount();
  }

  function renderCart() {
    var box = document.getElementById("cart-lines");
    if (!box) return;
    var c = cart(), total = 0, rows = [];
    for (var id in c) {
      var it = findItem(id);
      if (!it) continue;
      total += it.p * c[id];
      rows.push('<div class="cart-line"><span class="qty">' +
        '<button data-sub="' + id + '">\u2212</button><b>' + c[id] + '</b><button data-add="' + id + '">+</button></span>' +
        "<span>" + name(it) + '</span><span class="price">' + money(it.p * c[id]) + "</span></div>");
    }
    box.innerHTML = rows.length ? rows.join("") :
      '<p class="muted">' + L("Noch nichts ausgew\u00e4hlt.", "Nothing selected yet.") + " " +
      '<a class="link-more" href="speisekarte.html">' + L("Zur Speisekarte", "Go to the menu") + " \u2192</a></p>";
    var tt = document.getElementById("cart-total");
    if (tt) tt.textContent = money(total);
    var fee = document.getElementById("fee-note");
    if (fee) fee.textContent = L("Liefergeb\u00fchren und Mindestbestellwert noch zu best\u00e4tigen.",
                                 "Delivery fees and minimum order still to be confirmed.");
  }

  function modal(title, body) {
    var m = document.getElementById("modal");
    if (!m) return;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-body").textContent = body;
    m.classList.add("open");
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-add]"), s = e.target.closest("[data-sub]");
    if (a) { add(a.getAttribute("data-add")); a.classList.add("pop"); setTimeout(function(){a.classList.remove("pop");}, 200); }
    if (s) sub(s.getAttribute("data-sub"));

    if (e.target.closest("#lang-toggle")) {
      lang = lang === "de" ? "en" : "de";
      localStorage.setItem(LANG_KEY, lang);
      applyLang();
    }
    if (e.target.closest("#burger-btn")) document.querySelector(".nav").classList.toggle("open");

    var mb = e.target.closest(".mode-btn");
    if (mb) {
      document.querySelectorAll(".mode-btn").forEach(function (b) { b.classList.remove("on"); });
      mb.classList.add("on");
      document.getElementById("addr-fields").classList.toggle("hidden", mb.dataset.mode !== "delivery");
    }
    if (e.target.closest("#place-order")) {
      var c = cart(), n = 0;
      for (var k in c) n += c[k];
      if (!n) return modal(L("Warenkorb ist leer", "Cart is empty"),
        L("Bitte zuerst etwas aus der Speisekarte w\u00e4hlen.", "Please pick something from the menu first."));
      modal(L("Platzhalter", "Placeholder"),
        L("Die Bestellung wurde noch nicht abgeschickt. Bezahlung und K\u00fcchen-Anbindung sind noch nicht eingerichtet.",
          "The order has not been sent. Payment and the kitchen connection are not set up yet."));
    }
    if (e.target.closest("#place-res")) {
      modal(L("Platzhalter", "Placeholder"),
        L("Die Anfrage wurde noch nicht gesendet. Das Buchungssystem ist noch nicht angebunden.",
          "The request has not been sent. The booking system is not connected yet."));
    }
    if (e.target.closest("#modal-close")) document.getElementById("modal").classList.remove("open");
  });

  applyLang();
})();
