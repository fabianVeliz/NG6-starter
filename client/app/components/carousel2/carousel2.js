import angular from 'angular';
import uiRouter from 'angular-ui-router';
import swiperDirective from './swiper/swiper.directive';
import carousel2Component from './carousel2.component';
import SwiperComp from './swiperComponent/swiper';

let carousel2Module = angular.module('carousel2', [
  uiRouter,
  SwiperComp
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
.directive('swiper', ['$timeout', ($timeout) => new swiperDirective($timeout)])

.name;

export default carousel2Module;
