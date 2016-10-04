import angular from 'angular';
import uiRouter from 'angular-ui-router';
import owlCarouselComponent from './owlCarousel.component';

let olCarouselModule = angular.module('owcr', [
  uiRouter
])

.component('owlCarouselComp', owlCarouselComponent)

.name;

export default olCarouselModule;
