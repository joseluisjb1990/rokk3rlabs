import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};


const brands = [
  'gap',
  'banana tepublic',
  'boss',
  'hugo boss',
  'taylor',
  'rebecca taylor'
]

const clothing = [
  'denim',
  'pants',
  'sweaters',
  'skirts',
  'dresses'
]


class AppCtrl {
  constructor($http) {
    this.text = '';
    this.searchResults = [];
    this.http = $http;
  }

  getSearchResults() {
    const text = this.text.split(' ').filter((word) => {
      return brands.includes(word.toLowerCase()) || clothing.includes(word.toLowerCase());
    }).join(' ');

    const endpoint = `http://localhost:3333/api/brand?q=${text}`;
    this.http.get(endpoint, {
      'Content-Type': 'application/json'
    }).then((results) => {
      this.searchResults = results.data
        .map((result) => `${result.brand} ${result.type}`);
    });
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;