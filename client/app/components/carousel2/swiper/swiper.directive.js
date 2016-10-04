import template from './swiper.html';

class swiper {
  constructor($timeout) {
    this.$timeout = $timeout;

    this.restrict = 'E';
    this.template = template;
    this.scope = {
      collection: '=',
      settings: '=?',
      sliderId: '@'
    };
  }

  link(scope, element) {
    let slider;
    let defaultSettings = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 1000,
      autoplayDisableOnInteraction: false
    };

    let settings = angular.extend(defaultSettings, scope.settings);

    this.$timeout( () => {
      slider = new Swiper('#' + scope.sliderId, settings);

      // @TODO: Workaround to stop slider on hover
      $('#' + scope.sliderId).hover(slider.stopAutoplay, slider.startAutoplay);
    });

    scope.removeItem = (index) => {
      if (confirm('Are you sure?')) {
        // Here, Send request to the BE
        slider.removeSlide(index);
      }
    }
  }
}

export default swiper;
