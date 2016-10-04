import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carousel1Component from './carousel1.component';
// import owlCarouselDirective from './owlCarousel/owlCarousel.directive';
import OwlCarousel from './owlCarouselComponent/owlCarousel';

let carousel1Module = angular.module('carousel1', [
  uiRouter,
  OwlCarousel
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
// .directive('owlCarousel', ['$timeout', ($timeout) => new owlCarouselDirective($timeout)])

.name;

export default carousel1Module;
