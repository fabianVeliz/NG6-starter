import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Carousel1 from './carousel1/carousel1';
import Carousel2 from './carousel2/carousel2';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Carousel1,
  Carousel2
])

.name;

export default componentModule;
