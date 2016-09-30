import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Carousel1 from './carousel1/carousel1';
import Carousel2 from './carousel2/carousel2';
import Carousel3 from './carousel3/carousel3';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Carousel1,
  Carousel2,
  Carousel3
])

.name;

export default componentModule;
