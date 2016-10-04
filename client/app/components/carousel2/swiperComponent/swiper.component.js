import template from './swiper.html';
import controller from './swiper.controller';

let swiperComponent = {
  restrict: 'E',
  bindings: {
      collection: '=',
      settings: '=?',
      sliderId: '@'
  },
  template,
  controller
};

export default swiperComponent;
