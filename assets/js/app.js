// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  popup: {
    closeByBackdropClick: false,
  }
});

// create searchbar
var searchbar = app.searchbar.create({
    el: '.searchbar',
    searchContainer: '.list',
    searchIn: '.item-title',
    on: {
        search(sb, query, previousQuery) {
        console.log(query, previousQuery);
        }
    }
});

$('#save_form_data').on('click', function() {
    var formData = {
        'name': 'John',
        'email': 'john@doe.com',
        'gender': 'female',
        'toggle': ['yes'],
    }
    console.log(formData);
    return false;
    app.form.fillFromData('#my-form', formData);
});

$('.convert-form-to-data').on('click', function(){
    var formData = app.form.convertToData('#my-form');
    alert(JSON.stringify(formData));
});