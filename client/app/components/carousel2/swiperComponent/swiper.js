import angular from 'angular';
import uiRouter from 'angular-ui-router';
import swiperComponent from './swiper.component';

let swiperModule = angular.module('sw', [
  uiRouter
])

.component('swiperComp', swiperComponent)

.name;

export default swiperModule;
