import template from './owlCarousel.html';

class owlCarouselDirective {
  constructor($timeout) {
    this.$timeout = $timeout;

    this.restrict = 'E';
    this.template = template;
    this.scope = {
      collection: '=',
      settings: '=?'
    };
  }

  link(scope, element) {
    let slider;
    let defaultSettings = {
      autoPlay: true,
      singleItem:true,
      stopOnHover: true,
      items: 1
    };

    let settings = angular.extend(defaultSettings, scope.settings);

    this.$timeout( () => {
      slider = $('#carousel-1', element);
      slider.owlCarousel(settings);
    });

    scope.removeItem = (index) => {
      if (confirm('Are you sure?')) {
        // Here, Send request to the BE
        slider.data('owlCarousel').removeItem(index);
      }
    }
  }
}

export default owlCarouselDirective;
