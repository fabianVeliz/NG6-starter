class owlCarouselController {
  /*@ngInject*/
  constructor($element, $timeout) {
    this.$element = $element;
    this.$timeout = $timeout;
    this.slider = null;
  }

  $postLink = ()  => {
    let defaultSettings = {
      autoPlay: true,
      singleItem:true,
      stopOnHover: true,
      items: 1
    };

    let settings = angular.extend(defaultSettings, this.settings);
    this.$timeout( () => {
      this.slider = $('#carousel-1', this.$element);
      this.slider.owlCarousel(settings);
    });

  }

  removeItem = (index) => {
    if (confirm('Are you sure?')) {
      // Here, Send request to the BE
      this.slider.data('owlCarousel').removeItem(index);
    }
  }
}

export default owlCarouselController;
