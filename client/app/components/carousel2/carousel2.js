import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carousel2Component from './carousel2.component';
import 'swiper';
import 'angular-ui-swiper';

let carousel2Module = angular.module('carousel2', [
  uiRouter,
  'ui.swiper'
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('carousel2', {
      url: '/carousel2',
      component: 'carousel2'
    });
})

.component('carousel2', carousel2Component)

.name;

export default carousel2Module;
