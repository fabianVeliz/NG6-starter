import template from './owlCarousel.html';
import controller from './owlCarousel.controller';

let owlCarouselComponent = {
  restrict: 'E',
  bindings: {
      collection: '=',
      settings: '=?'
  },
  template,
  controller
};

export default owlCarouselComponent;
