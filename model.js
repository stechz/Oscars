// Nominations

var nominations = {
  'Best Picture': [
    'Black Swan',
    'The Fighter',
    'Inception',
    'The Kids Are All Right',
    'The King\'s Speech',
    '127 Hours',
    'The Social Network',
    'Toy Story 3',
    'True Grit',
    'Winter\'s Bone'
  ], 
  
  'Actor in a Leading Role': [
    'Javier Bardem, Biutiful',
    'Jeff Bridges, True Grit',
    'Jesse Eisenburg, The Social Network',
    'Colin Firth, The King\'s Speech',
    'James Franco, 127 Hours'
  ],

  'Actor in a Supporting Role': [
    'Christian Bale, The Fighter',
    'John Hawkes, Winter\'s Bone',
    'Jeremy Renner, The Town',
    'Mark Ruffalo, The Kids Are All Right',
    'Geoffrey Rush, The King\'s Speech'
  ],

  'Actress in a Leading Role': [
    'Annette Bening, The Kids Are All Right',
    'Nicole Kidman, Rabbit Hole',
    'Jennifer Lawrence, Winter\'s Bone',
    'Natalie Portman, Black Swan',
    'Michelle Williams, Blue Valentine'
  ],

  'Actress in a Supporting Role': [
    'Amy Adams, The Fighter',
    'Helena Bonham Carter, The King\'s Speech',
    'Melissa Leo, The Fighter',
    'Hailee Steinfeld, True Grit',
    'Jacki Weaver, Animal Kingdom'
  ],

  'Animated Feature Film': [
    'How to Train Your Dragon',
    'The Illusionist',
    'Toy Story 3'
  ],

  'Art Direction': [
    'Alice in Wonderland',
    'H.P. and the Deathly Hallows, Pt. 1',
    'Inception',
    'The King\'s Speech',
    'True Grit'
  ],

  'Cinematography': [
    'Black Swan',
    'Inception',
    'The King\'s Speech',
    'The Social Network',
    'True Grit'
  ],

  'Costume Design': [
    'Alice in Wonderland',
    'I Am Love',
    'The King\'s Speech',
    'The Tempest',
    'True Grit'
  ],

  'Directing': [
    'Black Swan',
    'The Fighter',
    'The King\'s Speech',
    'The Social Network',
    'True Grit'
  ],

  'Documentary': [
    'Exit Through the Gift Shop',
    'Gasland',
    'Inside Job',
    'Restrepo',
    'Waste Land'
  ],

  'Documentary Short Subject': [
    'Killing in the Name',
    'Poster Girl',
    'Strangers No More',
    'Sun Come Up',
    'The Warriors of Qiugang'
  ],

  'Film Editing': [
    'Black Swan',
    'The Fighter',
    'The King\'s Speech',
    '127 Hours',
    'The Social Network'
  ],

  'Foreign Language Film': [
    'Biutiful',
    'Dogtooth',
    'In a Better World',
    'Incedies',
    'Outside the Law (Hors-la-loi)'
  ],

  'Makeup': [
    'Barney\'s Vision',
    'The Way Back',
    'The Wolfman'
  ],

  'Music (Original Score)': [
    'How to Train Your Dragon',
    'Inception',
    'The King\'s Speech',
    '127 Hours',
    'The Social Network'
  ],

  'Music (Original Song)': [
    'Country Strong, Coming Home',
    'Tangled, I See the Light',
    '127 Hours, If I Rose',
    'Toy Story 3, We Belong Together'
  ],

  'Short Film (Animated)': [
    'Day and Night',
    'The Gruffalo',
    'Let\'s Pollute',
    'The Lost Thing',
    'Madagascar, a Journey Diary'
  ],

  'Short Film (Live Action)': [
    'The Confession',
    'The Crush',
    'God of Love',
    'Na Wewe',
    'Wish 143'
  ],

  'Sound Editing': [
    'Inception',
    'Toy Story 3',
    'Tron: Legacy',
    'True Grit',
    'Unstoppable'
  ],

  'Sound Mixing': [
    'Inception',
    'The King\'s Speech',
    'Salt',
    'The Social Network',
    'True Grit'
  ],

  'Visual Effects': [
    'Alice in Wonderland',
    'H.P. and the Deathly Hallows Pt. 1',
    'Hereafter',
    'Inception',
    'Iron Man 2'
  ],

  'Writing (Adapted Screenplay)': [
    '127 Hours',
    'The Social Network',
    'Toy Story 3',
    'True Grit',
    'Winter\'s Bone'
  ],

  'Writing (Original Screenplay)': [
    'Another Year',
    'The Fighter',
    'Inception',
    'The Kids Are All Right',
    'The King\'s Speech'
  ]
};

function forEachCategory(fn) {
  var index = 0;
  for (var i in nominations)
    fn(index++, i);
}

function forEachCategoryItem(category, fn) {
  var category = nominations[category];
  for (var i = 0; i < category.length; i++) {
    var parts = category[i].split(", ");
    fn(i, parts[0], parts[1] || "");
  }
}

// Names

var names = {};
if (localStorage['names']) {
  try {
    names = JSON.parse(localStorage['names']);
  } catch(e) {}
}

var currentName = null;

function forEachName(fn) {
  for (var i in names) {
    fn(i);
  }
}

function selectUser(user) {
  user = escape(user.replace(/\s+|\s+$/, ""));
  if (!(user in names)) {
    names[user] = {};
  }
  currentName = user;
}

// Choices

function selectChoice(category_id, choice_id) {
  names[currentName][category_id] = choice_id;
  localStorage['names'] = JSON.stringify(names);
}

function deleteChoice(category_id, choice_id) {
  if (category_id in names[currentName])
    delete names[currentName][category_id];
  localStorage['names'] = JSON.stringify(names);
}

function getChoice(category_id) {
  return names[currentName][category_id];
}

// Winner

var winners = {};
if (localStorage['winners']) {
  try {
    winners = JSON.parse(localStorage['winners']);
  } catch(e) {}
}

function selectWinner(category_id, choice_id) {
  winners[category_id] = choice_id;
  localStorage['winners'] = JSON.stringify(winners);
}

function deleteWinner(category_id) {
  if (category_id in winners)
    delete winners[category_id];
  localStorage['winners'] = JSON.stringify(winners);
}

function getWinner(category_id) {
  return winners[category_id];
}
