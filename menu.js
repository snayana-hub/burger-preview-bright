// Menu content taken from the current Uber Eats listing (Aug 2026).
// Items marked tbc:true have no confirmed price yet.
window.MENU = [
  { id:"kombi", de:"Kombi Men\u00fc", en:"Combo menu",
    dde:"Burger nach Wahl, Pommes oder kleiner Salat und ein alkoholfreies Getr\u00e4nk 0,3 l.",
    den:"Burger of your choice, fries or a small salad, and a soft drink 0.3 l.",
    items:[ {id:"kombi-1", de:"Kombi Men\u00fc", en:"Combo menu", p:11,
             dde:"Burger nach Wahl + Pommes oder kleiner Salat + Getr\u00e4nk 0,3 l",
             den:"Burger of choice + fries or small salad + soft drink 0.3 l", tag:"#1"} ] },

  { id:"special", de:"Special Burger", en:"Special burgers",
    dde:"Die gro\u00dfen. Alle mit Rindfleisch, gereiftem Cheddar und Haussauce.",
    den:"The big ones. All with beef, aged cheddar and house sauce.",
    items:[
      {id:"big-bacon", de:"Big Bacon", en:"Big Bacon", p:15,
       dde:"Dreifacher knuspriger Rinder-Bacon, gereifter Cheddar, karamellisierte Zwiebeln, Salat, Haussauce.",
       den:"Triple crispy beef bacon, aged cheddar, caramelised onions, lettuce, house sauce."},
      {id:"western", de:"Western Burger", en:"Western Burger", p:15,
       dde:"Karamellisierte Zwiebeln, knuspriger Rinder-Bacon, Spiegelei, gereifter Cheddar, Salat, BBQ-Sauce.",
       den:"Caramelised onions, crispy beef bacon, fried egg, aged cheddar, lettuce, BBQ sauce."},
      {id:"monster", de:"Monster Burger", en:"Monster Burger", p:19,
       dde:"Doppelter Rinder-Bacon, doppeltes Fleisch, Spiegelei, doppelter Cheddar, Tomaten, Gurken, Salat, Zwiebeln, Haussauce.",
       den:"Double beef bacon, double patty, fried egg, double cheddar, tomato, pickles, lettuce, onions, house sauce."},
      {id:"hawaii", de:"Hawaii Burger", en:"Hawaii Burger", p:15,
       dde:"Gereifter Cheddar, knuspriger Rinder-Bacon, Ananas, Salat, Haussauce.",
       den:"Aged cheddar, crispy beef bacon, pineapple, lettuce, house sauce."},
      {id:"meister", de:"Meister Burger", en:"Meister Burger", p:15,
       dde:"Gereifter Cheddar, karamellisierte Zwiebeln, eingelegte Gew\u00fcrzgurken, zartes Pulled Beef (50 g), Haussauce und BBQ-Sauce.",
       den:"Aged cheddar, caramelised onions, pickles, tender pulled beef (50 g), house sauce and BBQ sauce."},
      {id:"pulled-classic", de:"Pulled Classic", en:"Pulled Classic", p:11,
       dde:"Eisbergsalat, Zwiebeln, Haussauce.", den:"Iceberg lettuce, onions, house sauce."},
      {id:"pulled-bbq", de:"Pulled BBQ", en:"Pulled BBQ", p:11,
       dde:"Eisbergsalat, Zwiebeln, BBQ-Sauce.", den:"Iceberg lettuce, onions, BBQ sauce."} ] },

  { id:"burger", de:"Burger", en:"Burgers", dde:"", den:"",
    items:[
      {id:"cheese", de:"Cheese Burger", en:"Cheese Burger", p:11, dde:"", den:"", tag:"#2"},
      {id:"double-cheese", de:"Double Cheeseburger", en:"Double Cheeseburger", p:14, dde:"", den:""},
      {id:"ei-cheese", de:"Ei Cheeseburger", en:"Egg Cheeseburger", p:12, dde:"", den:""},
      {id:"italy", de:"Italy Burger", en:"Italy Burger", p:12, dde:"", den:""} ] },

  { id:"vegan", de:"Vegane Soja-Burger", en:"Vegan soy burgers",
    dde:"Eigene vegane Linie auf Sojabasis.", den:"Our own soy-based vegan line.",
    items:[ {id:"vegan-tbc", de:"Auswahl folgt", en:"Selection to follow", p:null, tbc:true,
             dde:"Gerichte und Preise dieser Kategorie sind noch nicht best\u00e4tigt.",
             den:"Dishes and prices in this category are not confirmed yet."} ] },

  { id:"sides", de:"Beilagen", en:"Sides", dde:"", den:"",
    items:[
      {id:"pommes", de:"Pommes", en:"Fries", p:5, dde:"", den:""},
      {id:"suess", de:"S\u00fc\u00dfkartoffeln", en:"Sweet potato fries", p:7, dde:"", den:""},
      {id:"nuggets", de:"Chicken Nuggets (5 St\u00fcck)", en:"Chicken nuggets (5 pieces)", p:6, dde:"", den:"", tag:"#3"},
      {id:"loaded", de:"Loaded Fries", en:"Loaded fries", p:null, tbc:true,
       dde:"Sorten und Preise noch zu best\u00e4tigen.", den:"Varieties and prices to be confirmed."},
      {id:"salat", de:"Salat", en:"Salad", p:null, tbc:true,
       dde:"Auswahl und Preise noch zu best\u00e4tigen.", den:"Selection and prices to be confirmed."} ] },

  { id:"dessert", de:"Nachtisch", en:"Desserts", dde:"", den:"",
    items:[
      {id:"pancakes-ahorn", de:"Pancakes mit Ahornsirup und Butter", en:"Pancakes with maple syrup and butter", p:10, dde:"", den:""},
      {id:"pancakes-nutella", de:"Pancakes mit Nutella, Banane und Nussstreusel", en:"Pancakes with Nutella, banana and nut crumble", p:10, dde:"", den:""},
      {id:"pancakes-double", de:"Nutella-Banane-Pancakes mit doppelt Nutella", en:"Nutella banana pancakes with double Nutella", p:11, dde:"", den:""},
      {id:"churros", de:"Churros", en:"Churros", p:6, dde:"", den:""} ] },

  { id:"drinks", de:"Milchshakes und Getr\u00e4nke", en:"Milkshakes and drinks",
    dde:"Milchshakes, Frappuccino, Kaffee, alkoholfreie und alkoholische Getr\u00e4nke.",
    den:"Milkshakes, frappuccino, coffee, soft drinks and alcoholic drinks.",
    items:[ {id:"drinks-tbc", de:"Karte folgt", en:"List to follow", p:null, tbc:true,
             dde:"Sorten und Preise noch zu best\u00e4tigen \u2013 auch, ob Alkohol auf der Seite gezeigt wird.",
             den:"Varieties and prices to be confirmed \u2013 including whether alcohol is shown on the site."} ] }
];
window.FEATURED = ["monster","big-bacon","meister"];
