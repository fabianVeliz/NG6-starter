import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carousel3Component from './carousel3.component';

let carousel3Module = angular.module('carousel3', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('carousel3', {
      url: '/carousel3',
      component: 'carousel3'
    });
})

.component('carousel3', carousel3Component)

.name;

export default carousel3Module;
