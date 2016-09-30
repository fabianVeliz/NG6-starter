import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carousel1Component from './carousel1.component';

let carousel1Module = angular.module('carousel1', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('carousel1', {
      url: '/carousel1',
      component: 'carousel1'
    });
})

.component('carousel1', carousel1Component)

.name;

export default carousel1Module;
